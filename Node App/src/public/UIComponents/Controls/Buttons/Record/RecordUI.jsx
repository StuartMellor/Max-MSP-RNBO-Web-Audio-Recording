import React, { Component } from 'react';
import SvgRecord from './Record';
import SvgStop from '../Stop/Stop';

export default class RecordUI extends Component {
    render() {
        const { onClick, recording } = this.props;
        return(
            <div className='record-ui'>
                <button className='button-none' onClick={onClick}>
                    <SvgRecord recording={recording} />
                </button>
            </div>
        );
    }
};