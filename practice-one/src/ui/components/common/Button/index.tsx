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
  isButtonLarge?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  textColor,
  rightIcon,
  leftIcon,
  bgColor,
  isMarginBottom,
  isButtonLarge,
  onClick,
}: IProps) => (
  <button
    aria-label="button-element"
    className={`${bgColor} flex items-center rounded-xl hover:opacity-80 ${isButtonLarge ? 'py-3.5' : 'py-2.5'} ${leftIcon && 'pr-6 pl-4'} ${rightIcon && 'pr-4 pl-6'}`}
    onClick={onClick}
  >
    {leftIcon && (
      <i className={`mr-2 ${isMarginBottom && 'mb-1'}`}>{leftIcon}</i>
    )}
    <Typography
      tag="h2"
      textSize={Size.XSM}
      additionalClasses={`${textColor} leading-5`}
    >
      {label}
    </Typography>
    {rightIcon && <i className="ml-2">{rightIcon}</i>}
  </button>
);
