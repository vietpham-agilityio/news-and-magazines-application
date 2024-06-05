// constants
import { flexItemCenter } from "@/constants";
import { FontWeight, Size } from "@/types";

// components
import { Typography } from "@/ui/components";

interface IProps {
  name: string;
  information: string;
}

export const Information = ({ name, information }: IProps) => (
  <div className={`${flexItemCenter} justify-between`}>
    <Typography tag="h2" textSize={Size.SM} additionalClasses="text-dark-100">
      { name }
    </Typography>

    <Typography
      tag="h2"
      textSize={Size.XS}
      weight={FontWeight.Light}
      additionalClasses="text-dark-75"
    >
      { information }
    </Typography>
  </div>
);
