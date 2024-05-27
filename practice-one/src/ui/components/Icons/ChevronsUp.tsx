interface IProps {
    color?: string;
  }

export const ChevronsUp = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.75}
      d="M2.688 7.719a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407l5-5a.964.964 0 0 1 1.407 0l5 5a.964.964 0 0 1 0 1.407A.97.97 0 0 1 12 8a.99.99 0 0 1-.719-.281L7 3.437 2.687 7.72Zm5-.407 5 5a.964.964 0 0 1 0 1.407A.97.97 0 0 1 12 14a.99.99 0 0 1-.719-.281L7 9.438l-4.313 4.28a.964.964 0 0 1-1.406 0 .964.964 0 0 1 0-1.405l5-5a.964.964 0 0 1 1.407 0Z"
    />
  </svg>
);
