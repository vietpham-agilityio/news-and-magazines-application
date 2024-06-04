// components
import { Typography } from '@/ui/components/common';

interface IProps {
  icon: JSX.Element;
  content: string;
  additionalClass?: string;
}

export const Tag = ({ content, icon, additionalClass }: IProps) => (
  <div className={`flex ${additionalClass}`}>
    <div className="mr-2">{icon}</div>
    <Typography tag="p" additionalClasses="text-dark-75 text-xsm leading-4">
      { content }
    </Typography>
  </div>
);
