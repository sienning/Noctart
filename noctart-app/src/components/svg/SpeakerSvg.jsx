import * as React from "react";

const SpeakerSvg = (props) => (
  <svg
    width={24}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.333 6.875c1.445 1.926 1.445 5.657 0 7.583m3.25-11.375c4.32 4.126 4.347 11.069 0 15.167M1.167 13.872V7.46c0-.622.485-1.127 1.083-1.127h3.885a1.062 1.062 0 0 0 .766-.33l3.25-3.67c.682-.711 1.85-.207 1.85.797v15.073c0 1.012-1.182 1.512-1.86.787l-3.24-3.65a1.061 1.061 0 0 0-.775-.34H2.25c-.598 0-1.083-.505-1.083-1.128Z"
      stroke="#fff"
      strokeWidth={2.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SpeakerSvg;
