import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecordUI from './UIComponents/Controls/Buttons/Record/RecordUI';
import StopUI from './UIComponents/Controls/Buttons/Stop/StopUI';
import PlayUI from './UIComponents/Controls/Buttons/Play/PlayUI';

import './audiorecorder.styles.css';

export default class AudioRecorderUI extends Component {
    state = {
        recording: false,
        recordingAvailable: false,
        playing: false,
    }

    receiveMeterVal = (msgEvent) => {

    }
    
    receiveRecTime = (msgEvent) => {

    }

    beginRecording = () => {
        const { registerListener, sendParam } = this.props;
        registerListener('in_meter', this.receiveMeterVal);
        registerListener('rectime', this.receiveRecTime);
        sendParam('record', 1);
    }

    recordPanel = () => {
        const { sendParam } = this.props;
        return (
            <div id="record-panel">
                <RecordUI onClick={this.beginRecording} />
                <h1 style={{ textAlign: 'center' }}>00:00</h1>
            </div>
        )
    }

    playbackPanel = () => {
        return (
            <div id="playback-panel">
                <PlayUI />
                <h1 style={{ textAlign: 'center' }}>00:00</h1>
            </div>
        )
    }

    

    render() {
        const { recordingAvailable } = this.state;
        return (
            <div className='audiorecorder-ui'>
                <h1>Max MSP Audio Recorder</h1>
                <label>Duration</label>
                        <input />
                <div className='data-view' id='recorder-graphing'>

                </div>
                    <div className='control-panel' id='recorder-controls' style={{ width: '50%' }}>
                        {
                            !recordingAvailable
                                ? this.recordPanel()
                                : this.playbackPanel()
                        }
                    </div>
            </div>
        )
    }
};

AudioRecorderUI.propTypes = {

};

AudioRecorderUI.defaultProps = {

};