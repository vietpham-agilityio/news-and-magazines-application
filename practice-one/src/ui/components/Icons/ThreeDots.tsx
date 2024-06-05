import * as React from "react"

interface IProps {
    color?: string;
}

export const ThreeDots = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={18}
    fill="none"
    data-testid= "three-dots-icon"
  >
    <path
      fill={color}
      fillOpacity={0.75}
      d="M3 13.063c1.172 0 2.188 1.015 2.188 2.187 0 1.21-1.016 2.188-2.188 2.188A2.184 2.184 0 0 1 .812 15.25c0-1.172.977-2.188 2.188-2.188Zm0-6.25c1.172 0 2.188 1.015 2.188 2.187 0 1.21-1.016 2.188-2.188 2.188A2.184 2.184 0 0 1 .812 9c0-1.172.977-2.188 2.188-2.188Zm0-1.875A2.184 2.184 0 0 1 .812 2.75C.813 1.578 1.79.562 3 .562c1.172 0 2.188 1.016 2.188 2.188 0 1.21-1.016 2.188-2.188 2.188Z"
    />
  </svg>
)