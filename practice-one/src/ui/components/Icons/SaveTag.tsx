import * as React from "react"

interface IProps {
    color?: string;
}

export const SaveTag = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={21}
    fill="none"
  >
    <path
      fill={color}
      d="M13.625 0C14.641 0 15.5.86 15.5 1.875V18.75c0 .977-1.055 1.563-1.914 1.094L8 16.562l-5.625 3.282C1.515 20.312.5 19.727.5 18.75V1.875C.5.859 1.32 0 2.375 0h11.25Zm0 17.656V2.11c0-.117-.117-.234-.273-.234H2.57c-.117 0-.195.117-.195.234v15.547L8 14.375l5.625 3.281Z"
    />
  </svg>
);

