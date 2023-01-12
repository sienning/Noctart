import * as React from "react";

const ValidatedSvg = (props) => (
  <svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 22.364 19.422 30 34 15" stroke="#fff" strokeWidth={4} />
    <circle cx={23} cy={23} r={21} stroke="#fff" strokeWidth={4} />
  </svg>
);

export default ValidatedSvg;
