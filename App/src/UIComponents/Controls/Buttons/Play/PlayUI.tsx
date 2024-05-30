import SvgPlay from './PlaySvg';

export interface PlayUIProps {
  onClick: () => void;
}

export const PlayUI = ({ onClick }: PlayUIProps) => (
  <button onClick={onClick} className="play-ui">
    <SvgPlay />
  </button>
);
