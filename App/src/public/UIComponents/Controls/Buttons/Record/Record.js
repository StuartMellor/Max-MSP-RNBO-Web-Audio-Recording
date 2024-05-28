import * as React from "react";
const SvgRec = (props) => (
  <svg
    width={68}
    height={62}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#rec_svg__a)">
      <rect x={4} width={60} height={54} rx={2.5} fill="#D9D9D9" />
    </g>
    <rect x={4} width={60} height={50} rx={2.5} fill="#ECECEC" />
    <g filter="url(#rec_svg__b)">
      <circle cx={34.5} cy={25.5} r={10.5} fill="#D9D9D9" />
    </g>
    <defs>
      <filter
        id="rec_svg__a"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9_184" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9_184"
          result="shape"
        />
      </filter>
      <filter
        id="rec_svg__b"
        x={24}
        y={15}
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
        <feBlend in2="shape" result="effect1_innerShadow_9_184" />
      </filter>
    </defs>
  </svg>
);
export default SvgRec;

