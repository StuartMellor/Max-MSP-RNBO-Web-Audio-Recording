import React, { Component } from 'react';
import SvgRecord from './Record';

export default class RecordUI extends Component {
    render() {
        return(
            <div className='record-ui'>
                <SvgRecord />
            </div>
        );
    }
};