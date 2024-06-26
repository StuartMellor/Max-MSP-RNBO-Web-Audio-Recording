import { Device, MessageEvent, createDevice } from '@rnbo/js';
import { useCallback, useEffect, useRef, useState } from 'react';

import AudioRecorderUI from './AudioRecorderUI';
import ContextResumeOverlay from './ContextResumeOverlay';
import './maxloader.styles.css';

export interface MaxLoaderProps {
  maxFileName: string;
}

const MaxLoader = ({ maxFileName }: MaxLoaderProps) => {
  const [accepted, setAccepted] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [loading, setLoading] = useState<boolean | undefined>();
  const [load_error, setLoadError] = useState(false);
  const [listeners, setListeners] = useState<Record<string, (msgEvent: MessageEvent) => void> | undefined>();
  const context = useRef<AudioContext | undefined>();
  const device = useRef<Device | undefined>();

  useEffect(() => {
    console.log('listenersChanged: ', listeners);
  }, [listeners]);

  const getBufferData = async (bufferName: string) => {
    const dataBuffer = await device.current?.releaseDataBuffer(bufferName);
    console.log(dataBuffer);
  };

  const messageEventHandler = useCallback(
    (msgEvent: MessageEvent) => {
      if (listeners === undefined) return;
      const { tag } = msgEvent;
      const listenerTags = Object.keys(listeners);

      if (listenerTags.includes(msgEvent.tag)) {
        listeners[tag](msgEvent);
      }
    },
    [listeners]
  );

  useEffect(() => {
    const setup = async () => {
      try {
        const WAContext = window.AudioContext;
        context.current = new WAContext();

        setLoading(true);
        const response = await fetch(`export/${maxFileName}.export.json`);
        if (response.status !== 200) {
          throw `Could not retrieve ${maxFileName}`;
          return;
        }

        const patcher = await response.json();

        device.current = await createDevice({
          context: context.current,
          patcher,
        });

        if (device.current) {
          const descriptions = device.current.dataBufferDescriptions;
          console.log('descriptions: ', descriptions);

          for (const desc of descriptions) {
            console.log(desc);
          }

          device.current.messageEvent.subscribe(messageEventHandler);
          device.current.parameterChangeEvent.subscribe((param) => {
            // Called when param is updated / changed
            console.log(param);
          });

          const handleSuccess = (stream: MediaStream) => {
            if (!device.current) {
              return;
            }
            const source = context.current?.createMediaStreamSource(stream);
            source?.connect(device.current?.node);
          };
          navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);

          sendParam('inputmeter_on', 1);
          setLoadError(false);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        setLoadError(true);
        setLoading(false);
      }
    };
    setup();
  }, [maxFileName, messageEventHandler]);

  const registerListener = useCallback((tag: string, callback: (msgEvent: MessageEvent) => void) => {
    setListeners((prevListeners) => {
      const newListeners = { ...prevListeners };
      newListeners[tag] = callback;
      console.log('newListeners: ', newListeners);
      return newListeners;
    });
  }, []);

  // const removeListener = (tag: string) => {
  //     const newListeners = listeners ? { ...listeners} : {};
  //     delete newListeners[tag];
  //     setListeners(newListeners);
  // };

  const sendParam = (param: string, value: number) => {
    const paramOBj = device.current?.parametersById.get(param);
    paramOBj.value = value;
  };

  const openBuffer = async (bufName: string) => {
    if (!device.current) {
      return;
    }
    console.log(device.current.dataBufferDescriptions);
    const data = await device.current.releaseDataBuffer(bufName);
    console.log(data);
  };

  const acceptAppLoad = async () => {
    if (context.current) {
      await context.current.resume();
      if (context.current.state === 'running') {
        setAccepted(true);
        return;
      }
      setResumeError(true);
      return;
    }
    setLoadError(true);
  };

  if (resumeError) {
    return <div>Resume Error</div>;
  }

  if (load_error) {
    return <div>Load Error</div>;
  }

  return (
    <div className="maxloader">
      <ContextResumeOverlay accept={acceptAppLoad} accepted={accepted} loading={loading} />
      {accepted && (
        <AudioRecorderUI sendParam={sendParam} registerListener={registerListener} openBuffer={openBuffer} />
      )}
    </div>
  );
};

export default MaxLoader;
