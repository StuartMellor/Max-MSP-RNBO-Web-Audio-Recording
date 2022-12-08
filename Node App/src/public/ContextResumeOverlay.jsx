import React from 'react';
import PropTypes from 'prop-types';
import SvgNarrowButton from './UIComponents/Controls/Buttons/Text/Narrow/NarrowButton';

const overlayStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const ContextResumeOverlay = ({ accept, overlayColor }) => {
    return <div className='contextresume-overlay' style={{ ...overlayStyle, backgroundColor: overlayColor }}>
        <button
            onClick={accept}
            style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                width: '180px',
                height: '70px',
            }}>
            <h1 style={{ width: '180px',
                height: '70px',position: 'absolute', left: 0, top: '-3px', zIndex: 2, lineHeight: '100%', }}>Start Max</h1>
            <SvgNarrowButton viewBox="0 0 68 34" width={'180px'} height={'70px'} style={{ position: 'absolute', left: 0, top: 0 }} />
        </button>
    </div>
};

ContextResumeOverlay.propTypes = {
    accept: PropTypes.func.isRequired,
    overlayColor: PropTypes.string,
};

ContextResumeOverlay.defaultProps = {
    overlayColor: 'rgba(255, 255, 255, 0.6)',
}

export default ContextResumeOverlay;


