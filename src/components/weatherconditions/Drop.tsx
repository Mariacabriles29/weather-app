import * as React from "react";
const Drop = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 52.657 52.657"
    {...props}
  >
    <path
      d="M25.081 30.759c-5.663 5.663-14.844 5.663-20.506 0-5.663-5.663-5.663-14.843 0-20.506L14.828 0l10.253 10.253c5.663 5.663 5.663 14.844 0 20.506z"
      style={{
        fill: "#0096e6",
      }}
    />
    <path
      d="M49.985 35.657a8 8 0 0 1-11.314-11.314l5.657-5.657 5.657 5.657a8 8 0 0 1 0 11.314z"
      style={{
        fill: "#d0e8f9",
      }}
    />
    <path
      d="M31.157 51.485a4 4 0 0 1-5.657-5.657L28.328 43l2.828 2.828a4 4 0 0 1 .001 5.657z"
      style={{
        fill: "#e4ecf4",
      }}
    />
    <circle
      cx={9.328}
      cy={27.006}
      r={6}
      style={{
        fill: "#d0e8f9",
      }}
    />
  </svg>
);
export default Drop;
