import { PlayUI } from "@UIComponents";
import { useEffect, useState } from "react";

// import RecordUI from "./UIComponents/Controls/Buttons/Record/RecordUI";
// import StopUI from "./UIComponents/Controls/Buttons/Stop/StopUI";

import "./audiorecorder.styles.css";

interface AudioRecorderUIProps {
  registerListener: (msg: string, cb: (msgEvent: any) => void) => void;
  sendParam: (param: string, value: any) => void;
}

const AudioRecorderUI = ({
  registerListener,
  sendParam,
}: AudioRecorderUIProps) => {
  const [recording, setRecording] = useState(false);
  const [recordingAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log("Recorder state updated: ", recording, playing);
  }, [recording, playing]);

  const receiveMeterVal = (msgEvent: string) => {
    console.log(msgEvent);
  };

  const receiveRecTime = (msgEvent: string) => {
    console.log(msgEvent);
  };

  const beginRecording = () => {
    registerListener("in_meter", receiveMeterVal);
    registerListener("rectime", receiveRecTime);
    sendParam("record", 1);
    // Due to the way we're sending params, we will need to ensure recording is actually happening.
    // This is a temporary solution.
    setRecording(true);
  };

  const beginPlayback = () => {
    sendParam("play", 1);
    // Due to the way we're sending params, we will need to ensure playback is actually happening.
    // This is a temporary solution.
    setPlaying(true);
  };

  const RecordPanel = () => (
    <div id="record-panel">
      <RecordUI onClick={beginRecording} />
      <h1 style={{ textAlign: "center" }}>00:00</h1>
    </div>
  );

  const PlaybackPanel = () => (
    <div id="playback-panel">
      <PlayUI onClick={beginPlayback} />
      <h1 style={{ textAlign: "center" }}>00:00</h1>
    </div>
  );

  return (
    <div className="audiorecorder-ui">
      <h1>Max MSP Audio Recorder</h1>
      <label>Duration</label>
      <input />
      <div className="data-view" id="recorder-graphing"></div>
      <div
        className="control-panel"
        id="recorder-controls"
        style={{ width: "50%" }}
      >
        {!recordingAvailable ? <RecordPanel /> : <PlaybackPanel />}
      </div>
    </div>
  );
};

export default AudioRecorderUI;
