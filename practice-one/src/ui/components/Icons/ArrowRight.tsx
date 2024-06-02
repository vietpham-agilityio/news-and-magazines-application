interface IProps {
    color?: string;
  }

export const ArrowRight = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={11}
    fill="none"
    data-testid= "arrow-right"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M6.25 5.5a.866.866 0 0 1-.246.629l-4.375 4.375a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L4.144 5.5.398 1.754a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l4.376 4.374a.848.848 0 0 1 .246.602Z"
    />
  </svg>
)
