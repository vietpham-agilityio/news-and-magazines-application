interface IProps {
    color?: string;
  }

export const MailBox = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.75}
      d="M18.125.5C19.141.5 20 1.36 20 2.375c0 .625-.313 1.172-.781 1.523l-8.477 6.368a1.232 1.232 0 0 1-1.523 0L.742 3.898A1.87 1.87 0 0 1 0 2.375C0 1.359.82.5 1.875.5h16.25ZM8.477 11.281a2.52 2.52 0 0 0 3.007 0L20 4.875V13c0 1.406-1.133 2.5-2.5 2.5h-15A2.468 2.468 0 0 1 0 13V4.875l8.477 6.406Z"
    />
  </svg>
);
