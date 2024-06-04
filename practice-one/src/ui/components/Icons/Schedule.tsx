interface IProps {
    color?: string;
  }
  
  export const Schedule = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M4.531 2.5H8.47V1.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656V2.5h1.094c.957 0 1.75.793 1.75 1.75V13c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V4.25c0-.957.766-1.75 1.75-1.75h1.094V1.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656V2.5ZM1.688 13c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438V6H1.687v7Z"
    />
  </svg>
);