import React, { Component } from 'react';
import SvgPlay from './Play';

export default class PlayUI extends Component {
    render() {
        return(
            <div className='play-ui'>
                <SvgPlay />
            </div>
        );
    }
};