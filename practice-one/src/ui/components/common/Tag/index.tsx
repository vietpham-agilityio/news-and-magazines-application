// components
import { Typography } from '@/ui/components/common';

interface IProps {
  icon: JSX.Element;
  content: string;
}

export const Tag = ({ content, icon }: IProps) => (
  <div className="flex">
    <div className="mr-2">{icon}</div>
    <Typography tag="p" additionalClasses="text-dark-75 text-xsm leading-4">
      { content }
    </Typography>
  </div>
);
