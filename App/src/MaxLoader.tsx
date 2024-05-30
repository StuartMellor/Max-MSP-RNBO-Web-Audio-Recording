import { Device, createDevice } from '@rnbo/js';
import { useEffect, useRef, useState } from 'react';

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
  // const [audio_error, setAudioError] = useState(false);
  const [load_error, setLoadError] = useState(false);
  const [listeners, setListeners] = useState<Record<string, () => void> | {}>({});
  const context = useRef<AudioContext | undefined>();
  const device = useRef<Device | undefined>();

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
          device.current.parameters.forEach((param) => {
            console.log(param.name);
          });

          // device.current.messageEvent.subscribe(messageEventHandler);
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
  }, [maxFileName]);

  const registerListener = (tag: string, callback: () => void) => {
    const newListeners = listeners ? { ...listeners } : {};
    newListeners[tag] = callback;
    setListeners(newListeners);
  };

  // const removeListener = (tag: string) => {
  //     const newListeners = listeners ? { ...listeners} : {};
  //     delete newListeners[tag];
  //     setListeners(newListeners);
  // };

  // const messageEventHandler = (msgEvent) => {
  //     const { tag } = msgEvent;
  //     const listenerTags = this.listeners.keys();

  //     if (listenerTags.includes(msgEvent.tag)) {
  //         this.listeners[msgEvent].callback(msgEvent);
  //     }

  //     if (msgEvent.tag === "startedrecording") {
  //         console.log("Started recording!");
  //     }
  //     if (msgEvent.tag === "finishedrecording") {
  //         console.log("Finished Recording!");
  //         this.sendParam('record', 0);
  //     }
  // }

  const sendParam = (param: string, value: number) => {
    const paramOBj = device.current?.parametersById.get(param);
    paramOBj.value = value;
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

  return (
    <div className="maxloader">
      <ContextResumeOverlay accept={acceptAppLoad} accepted={accepted} loading={loading} />
      <AudioRecorderUI sendParam={sendParam} registerListener={registerListener} />
    </div>
  );
};

export default MaxLoader;
