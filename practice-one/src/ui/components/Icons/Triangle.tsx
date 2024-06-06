interface IProps {
    color?: string;
}

export const Triangle = ({color = "#F81539"}:IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={44}
    fill="none"
    data-testid= "triangle-icon"
  >
    <path
      fill={color}
      d="M33.844 18.156C35.156 19 36 20.5 36 22c0 1.594-.844 3.094-2.156 3.844l-27 16.5c-1.407.843-3.188.937-4.594.093C.844 41.688 0 40.188 0 38.5v-33c0-1.594.844-3.094 2.25-3.844a4.285 4.285 0 0 1 4.594.094l27 16.406Z"
    />
  </svg>
);
