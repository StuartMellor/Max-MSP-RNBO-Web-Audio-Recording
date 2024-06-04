import { MessageEvent } from '@rnbo/js';
import { useEffect, useState } from 'react';
import './audiorecorder.styles.css';

interface AudioRecorderUIProps {
  registerListener: (tag: string, callback: (msgEvent: MessageEvent) => void) => void;
  sendParam: (param: string, value: number) => void;
}

const AudioRecorderUI = ({ registerListener, sendParam }: AudioRecorderUIProps) => {
  const [recording, setRecording] = useState(false);
  const [recordingAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log('Recorder state updated: ', recording, playing);
  }, [recording, playing]);

  useEffect(() => {
    registerListener('in_meter', receiveMeterVal);
    registerListener('rectime', receiveRecTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const receiveMeterVal = (msgEvent: MessageEvent) => {
    console.log(msgEvent.payload);
  };

  const receiveRecTime = (msgEvent: MessageEvent) => {
    console.log(msgEvent.payload);
  };

  const beginRecording = () => {
    sendParam('record', 1);
    // Due to the way we're sending params, we will need to ensure recording is actually happening.
    // This is a temporary solution.
    setRecording(true);
  };

  const beginPlayback = () => {
    sendParam('play', 1);
    // Due to the way we're sending params, we will need to ensure playback is actually happening.
    // This is a temporary solution.
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
