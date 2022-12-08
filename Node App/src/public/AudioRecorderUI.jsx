import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecordUI from './UIComponents/Controls/Buttons/Record/RecordUI';
import StopUI from './UIComponents/Controls/Buttons/Stop/StopUI';
import PlayUI from './UIComponents/Controls/Buttons/Play/PlayUI';

import './audiorecorder.styles.css';

export default class AudioRecorderUI extends Component {
    render() {
        return (
            <div className='audiorecorder-ui'>
                <h1>Max MSP Audio Recorder</h1>
                <div className='data-view' id='recorder-graphing'>

                </div>
                <div className='control-panel' id='recorder-controls'>
                    <RecordUI />
                    <PlayUI />
                    <StopUI />
                </div>
            </div>
        )
    }
};

AudioRecorderUI.propTypes = {

};

AudioRecorderUI.defaultProps = {

};