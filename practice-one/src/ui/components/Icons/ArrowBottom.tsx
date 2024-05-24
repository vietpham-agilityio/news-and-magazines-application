interface IProps {
  color?: string;
}

export const ArrowBottom = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M6 6.75a.866.866 0 0 1-.629-.246L.996 2.129a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L6 4.644 9.746.898a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23L6.603 6.505A.848.848 0 0 1 6 6.75Z"
    />
  </svg>
);
