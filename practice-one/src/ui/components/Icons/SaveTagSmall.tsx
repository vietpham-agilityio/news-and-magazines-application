import * as React from "react"

interface IProps {
    color?: string;
}

export const SaveTagSmall = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={15}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M9.438.75c.71 0 1.312.602 1.312 1.313v11.812c0 .684-.738 1.094-1.34.766L5.5 12.344 1.562 14.64a.875.875 0 0 1-1.312-.766V2.062C.25 1.353.824.75 1.563.75h7.875Zm0 12.36V2.226c0-.082-.083-.164-.192-.164H1.7c-.082 0-.137.082-.137.164v10.882L5.5 10.813l3.938 2.296Z"
    />
  </svg>
);
