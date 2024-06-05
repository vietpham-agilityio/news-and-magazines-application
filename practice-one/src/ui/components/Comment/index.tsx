// components
import { FontWeight, Size } from "@/types";
import { Typography } from "@/ui/components/common";

interface IProps {
  userName: string;
  content: string;
}

export const Comment = ({ userName, content }: IProps) => (
  <div className="bg-white-90 p-4 rounded-xl">
    <Typography tag="h2" textSize={Size.SM} additionalClasses="text-dark-100">
      { userName }
    </Typography>
    <Typography
      tag="h3"
      weight={FontWeight.Light}
      additionalClasses="text-p text-dark-75"
    >
      { content }
    </Typography>
  </div>
);
