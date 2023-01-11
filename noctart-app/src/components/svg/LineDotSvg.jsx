import * as React from "react";

const LineDot = (props) => (
  <svg
    width={16}
    height={844}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#F2F2F2" d="M7 0h1v844H7z" />
    <circle cx={8} cy={748.488} r={8} fill="#C3C4C4" />
  </svg>
);

export default LineDot;
