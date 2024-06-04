import { useState } from 'react';

export interface ContextResumeOverlayProps {
  accept: () => void;
  overlayColor?: string;
  accepted: boolean;
  loading: boolean | undefined;
}

const ContextResumeOverlay = ({
  accept,
  overlayColor = 'rgba(0,0,0,0.8)',
  accepted,
  loading,
}: ContextResumeOverlayProps) => {
  const [hovered, setHovered] = useState(false);

  if (accepted) {
    return <div className="contextresume-overlay" style={{ backgroundColor: 'rgba(0,0,0,0)' }} />;
  }

  if (typeof loading === 'undefined') {
    return <div className="contextresume-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />;
  }

  return (
    <div
      className="contextresume-overlay"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: overlayColor,
        transition: 'background-color 0.1s ease-in-out',
      }}
    >
      <button
        onClick={accept}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          background: hovered ? 'rgba(200, 200, 200)' : 'rgba(150, 150,150)',
          border: 'none',
          width: '180px',
          height: '70px',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.1s ease-in-out',
        }}
      >
        <h1
          style={{
            lineHeight: '100%',
            color: 'white',
            margin: 0,
          }}
        >
          Start Max
        </h1>
      </button>
    </div>
  );
};

export default ContextResumeOverlay;
