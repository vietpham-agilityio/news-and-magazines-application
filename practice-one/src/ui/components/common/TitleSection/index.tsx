// components
import { Typography } from "@/ui/components/common";

// constants
import { flexItemCenter } from "@/constants";

interface IProps {
  title: string;
}

export const TitleSection = ({ title }: IProps) => (
  <div className={`${flexItemCenter}`}>
    {/* Dot color */}
    <div className="w-1 h-[11px] bg-primary-100 rounded-2xl mr-1.5" />

    <Typography tag="h2" additionalClasses="text-dark-100 leading-6">
      { title }
    </Typography>
  </div>
);
