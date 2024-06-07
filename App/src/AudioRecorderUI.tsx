import { MessageEvent } from '@rnbo/js';
import { useEffect, useState } from 'react';
import './audiorecorder.styles.css';

interface AudioRecorderUIProps {
  registerListener: (tag: string, callback: (msgEvent: MessageEvent) => void) => void;
  openBuffer: (bufferName: string) => void;
  sendParam: (param: string, value: number) => void;
}

const AudioRecorderUI = ({ registerListener, sendParam, openBuffer }: AudioRecorderUIProps) => {
  const [recording, setRecording] = useState(false);
  const [timeZeroCount, setTimeZeroCount] = useState(0);
  const [recordingAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log('Recorder state updated: ', recording, playing);
  }, [recording, playing]);

  useEffect(() => {
    // registerListener('in_meter', receiveMeterVal);
    registerListener('rectime', receiveRecTime);
    registerListener('finishedrecording', finishedRecording);
    registerListener('startedrecording', () => {
      setRecording(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const receiveMeterVal = (msgEvent: MessageEvent) => {
    console.log(msgEvent.payload);
  };

  const finishedRecording = (msgEvent: MessageEvent) => {
    console.log(msgEvent.payload);
  };

  const receiveRecTime = (msgEvent: MessageEvent) => {
    console.log(msgEvent.payload);
    // We'll expect two 0's to come up. On the second, we'll set recording to finished
    if (msgEvent.payload === 0) {
      console.log('Finished recording!');
      openBuffer('recordedaudio');
      setRecording(false);
    }
  };

  const beginRecording = () => {
    sendParam('record', 1);
  };

  const beginPlayback = () => {
    sendParam('play', 1);
    setPlaying(true);
  };

  const RecordPanel = () => (
    <div id="record-panel">
      <button onClick={beginRecording}>Record</button>
      <h1 style={{ textAlign: 'center' }}>00:00</h1>
    </div>
  );

  const PlaybackPanel = () => (
    <div id="playback-panel">
      <button onClick={beginPlayback}>Record</button>
      <h1 style={{ textAlign: 'center' }}>00:00</h1>
    </div>
  );

  return (
    <div className="audiorecorder-ui" style={{ display: 'flex', gap: '10px' }}>
      <h1 style={{ margin: 0 }}>Max MSP</h1>
      <h1 style={{ margin: 0 }}>Audio Recorder</h1>
      <label>Duration</label>
      <input />
      <div className="data-view" id="recorder-graphing"></div>
      <div className="control-panel" id="recorder-controls" style={{ width: '50%' }}>
        {!recordingAvailable ? <RecordPanel /> : <PlaybackPanel />}
      </div>
    </div>
  );
};

export default AudioRecorderUI;
