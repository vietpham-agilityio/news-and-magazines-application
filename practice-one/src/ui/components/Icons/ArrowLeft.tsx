interface IProps {
    color?: string;
  }

export const ArrowLeft = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={13}
    fill="none"
    data-testid= "arrow-left"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M7 13a.99.99 0 0 1-.719-.281l-5-5a.964.964 0 0 1 0-1.407l5-5a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.407L3.405 7l4.281 4.313a.964.964 0 0 1 0 1.406A.97.97 0 0 1 7 13Z"
    />
  </svg>
);
