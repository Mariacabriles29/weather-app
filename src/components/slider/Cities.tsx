import * as React from "react";
const Cities = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M2 4H0V3h2v1Zm13 0H4V3h11v1ZM2 8H0V7h2v1Zm13 0H4V7h11v1ZM2 12H0v-1h2v1Zm13 0H4v-1h11v1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Cities;
