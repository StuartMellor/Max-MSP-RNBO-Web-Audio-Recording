import React, { Component } from 'react';
import { createDevice } from '@rnbo/js';
import axios from 'axios';

import AudioRecorderUI from './AudioRecorderUI';
import ContextResumeOverlay from './ContextResumeOverlay';

import './maxloader.styles.css';

let context = null;

export default class MaxLoader extends Component {
    constructor() {
        super();
        this.device = null;
        this.listeners = {};
    }

    state = {
        accepted: false,
        loaded: false,
        audio_error: null,
        load_error: null,
        context,
    }

    componentDidMount() {
        const WAContext = window.AudioContext || window.webkitAudioContext;
        context = new WAContext();
        console.log(context);
        this.setup(context);
    }

    setup = () => {
        const { maxFileName } = this.props;
        axios.get(`export/${maxFileName}.export.json`).then(response => {
            if (response.status !== 200) {
                throw `Could not retrieve ${maxFileName}`;
                return;
            }
            createDevice({ context: context, patcher: response.data }).then(device => {
                console.log("Max device successfully created!");
                this.device = device;
                this.device.parameters.forEach(param => {
                    console.log(param.name);
                });

                this.device.messageEvent.subscribe(this.messageEventHandler);
                this.setState({ loaded: true, load_error: null });
            });
        }).catch(err => {
            console.log('Setup failed because:');
            console.log(`----- ${err} -----`);
            this.setState({ load_error: err });
        });
    }

    registerListener = (tag, callback) => {
        this.listeners[tag] = { 
            tag,
            callback
        }
    }

    removeListener = (tag) => {
        // need to implement remove.
    }

    messageEventHandler = (msgEvent) => {
        const { tag } = msgEvent;
        const listenerTags = this.listeners.keys();

        if(listenerTags.includes(msgEvent.tag)) {
            this.listeners[msgEvent].callback(msgEvent);
        }

        if(msgEvent.tag === "startedrecording") {
            console.log("Started recording!");
        }
        if(msgEvent.tag === "finishedrecording") {
            console.log("Finished Recording!");
            this.sendParam('record', 0);
        }
    }

    sendParam = (param, value) => {
        // console.log();
        const paramOBj = this.device.parametersById.get(param);
        paramOBj.value = value;
    }

    acceptAppLoad = () => {
        console.log(context);
        context.resume();
        this.setState({ accepted: true });
    }

    render() {
        const { accepted, loading } = this.state;

        return (
            <div className='maxloader'>
                <ContextResumeOverlay accept={this.acceptAppLoad} accepted={accepted} loading={loading} />
                {
                    /// Your max app goes below /// 
                }

                <AudioRecorderUI sendParam={this.sendParam} registerListener={this.registerListener} />

                {
                    /// Yor max app goes above ///
                }
            </div>
        )
    }
}

MaxLoader.propTypes = {

}

MaxLoader.defaultProps = {

}