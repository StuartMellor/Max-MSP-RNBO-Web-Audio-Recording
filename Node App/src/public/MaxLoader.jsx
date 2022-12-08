import React, { Component } from 'react';
import { createDevice } from '@rnbo/js';
import axios from 'axios';

import ContextResumeOverlay from './ContextResumeOverlay';

export default class MaxLoader extends Component {
    constructor() {
        super();
        this.context = null;
        this.device = null;
    }

    state = {
        accepted: false,
        loaded: false,
        audio_error: null,
        load_error: null,
    }

    componentDidMount() {
        const WAContext = window.AudioContext || window.webkitAudioContext;
        this.context = new WAContext();

        this.setup(this.context);
    }

    setup = (context) => {
        const { maxFileName } = this.props;
        axios.get(`export/${maxFileName}.export.json`).then(response => {
            if(response.status !== 200) {
                throw `Could not retrieve ${maxFileName}`;
                return;
            }
            createDevice({ context, patcher: response.data }).then(device => {
                console.log("Max device successfully created!");
                this.device = device;
                this.setState({ loaded: true, load_error: null });
            });
        }).catch(err => {
            console.log('Setup failed because:');
            console.log(`----- ${err} -----`);
            this.setState({ load_error: err });
        });
    }

    acceptAppLoad = () => {
        this.setState({ accepted: true });
    }

    render() {
        const { accepted, loading } = this.state;

        return (
            <div className='maxloader'>
                <ContextResumeOverlay accept={this.acceptAppLoad} accepted={accepted} loading={loading} />
            </div>
        )
    }
}

MaxLoader.propTypes = {

}

MaxLoader.defaultProps = {

}