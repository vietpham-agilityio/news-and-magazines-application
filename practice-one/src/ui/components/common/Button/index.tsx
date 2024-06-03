// components
import { Typography } from '@/ui/components/common';

// constants
import { Size } from '@/types';

interface IProps {
  label: string;
  textColor: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  bgColor?: string;
  isMarginBottom?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  textColor,
  rightIcon,
  leftIcon,
  bgColor,
  isMarginBottom,
  onClick,
}: IProps) => (
  <button
    className={`${bgColor} flex items-center py-2.5 rounded-xl hover:opacity-80 ${leftIcon && 'pr-6 pl-4'} ${leftIcon && 'pr-6 pl-4'}`}
    onClick={onClick}
  >
    {leftIcon && (
      <i className={`mr-2 ${isMarginBottom && 'mb-1'}`}>{leftIcon}</i>
    )}
    <Typography
      tag="p"
      textSize={Size.XSM}
      additionalClasses={`${textColor} leading-5`}
    >
      {label}
    </Typography>
    {rightIcon && <i className="ml-2">{rightIcon}</i>}
  </button>
);
