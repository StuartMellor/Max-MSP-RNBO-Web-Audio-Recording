export interface ContextResumeOverlayProps {
  accept: () => void;
  overlayColor?: string;
  accepted: boolean;
  loading: boolean | undefined;
}

const ContextResumeOverlay = ({
  accept,
  overlayColor = 'rgba(255, 255, 255, 0.6)',
  accepted,
  loading,
}: ContextResumeOverlayProps) => {
  if (accepted) {
    return <div className="contextresume-overlay" style={{ backgroundColor: 'rgba(0,0,0,0)' }} />;
  }

  if (typeof loading === 'undefined') {
    return <div className="contextresume-overlay" style={{ backgroundColor: 'black' }} />;
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
        transition: 'background-color 0.5s ease-in-out',
      }}
    >
      <button
        onClick={accept}
        style={{
          position: 'relative',
          background: 'none',
          border: 'none',
          width: '180px',
          height: '70px',
        }}
      >
        <h1
          style={{
            width: '180px',
            height: '70px',
            position: 'absolute',
            left: 0,
            top: '-3px',
            zIndex: 2,
            lineHeight: '100%',
          }}
        >
          Start Max
        </h1>
      </button>
    </div>
  );
};

export default ContextResumeOverlay;
