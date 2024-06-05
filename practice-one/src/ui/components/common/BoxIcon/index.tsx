interface IProps {
  icon: React.JSX.Element;
  additionalClasses?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const BoxIcon = ({
  icon,
  width = '12',
  height = '12',
  additionalClasses,
  onClick,
}: IProps) => (
  <button
    aria-label="box-button"
    className={`w-${width} h-${height} bg-white-90 flex items-center justify-center rounded-xl ${additionalClasses}`}
    onClick={onClick}
  >
    {icon}
  </button>
);
