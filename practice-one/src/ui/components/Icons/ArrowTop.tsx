interface IProps {
    color?: string;
  }

export const ArrowTop = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M6 .25c.246 0 .465.082.629.246l4.375 4.375a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L6 2.356 2.254 6.102a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L5.397.495A.848.848 0 0 1 6 .25Z"
    />
  </svg>
);
