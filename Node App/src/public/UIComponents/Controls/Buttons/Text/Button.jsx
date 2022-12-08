import React from 'react';
const SvgButton = (props) => (
  <svg
    // width={114}
    // height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#Button_svg__a)">
      <rect x={1} width={112} height={26} rx={2.5} fill="#D9D9D9" />
    </g>
    <rect x={1} width={112} height={22.148} rx={2.5} fill="#ECECEC" />
    <defs>
      <filter
        id="Button_svg__a"
        x={-3}
        y={0}
        width={120}
        height={34}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_23_3" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_23_3"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgButton;

