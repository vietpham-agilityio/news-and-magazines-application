interface IProps {
    color?: string;
  }

export const User = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.75}
      d="M7 8C4.781 8 3 6.219 3 4c0-2.188 1.781-4 4-4 2.188 0 4 1.813 4 4 0 2.219-1.813 4-4 4Zm1.563 1.5c3 0 5.437 2.438 5.437 5.438C14 15.53 13.5 16 12.906 16H1.062A1.054 1.054 0 0 1 0 14.937c0-3 2.406-5.437 5.406-5.437h3.157Z"
    />
  </svg>
);
