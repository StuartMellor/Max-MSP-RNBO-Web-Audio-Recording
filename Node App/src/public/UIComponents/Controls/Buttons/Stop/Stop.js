import * as React from "react";
const SvgStop = (props) => (
  <svg
    width={68}
    height={62}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#stop_svg__a)">
      <rect x={4} width={60} height={54} rx={2.5} fill="#D9D9D9" />
    </g>
    <rect x={4} width={60} height={50} rx={2.5} fill="#ECECEC" />
    <g filter="url(#stop_svg__b)">
      <path fill="#D9D9D9" d="M24 14h21v21H24z" />
    </g>
    <defs>
      <filter
        id="stop_svg__a"
        x={0}
        y={0}
        width={68}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9_183" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9_183"
          result="shape"
        />
      </filter>
      <filter
        id="stop_svg__b"
        x={24}
        y={14}
        width={21}
        height={25}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_9_183" />
      </filter>
    </defs>
  </svg>
);
export default SvgStop;

