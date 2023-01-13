import * as React from "react";

const CheckSvg = ({ color = "#FFFFFF" }) => (
  <svg width={26} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 9.364 9.422 17 24 2"
      stroke={color}
      strokeOpacity={color == "#FFFFFF" ? 0.5 : 1}
      strokeWidth={4}
    />
  </svg>
);

export default CheckSvg;
