// constants
import { flexItemCenter } from "@/constants";
import { FontWeight, Size } from "@/types";

// components
import { TitleSection, Typography } from "@/ui/components";

interface ITagItem {
  id: string;
  tagName: string;
}

const listTagItems: ITagItem[] = [
  { id: "1", tagName: "Montenegro" },
  { id: "2", tagName: "Visit Croatia" },
  { id: "3", tagName: "Luxury Travel" },
  { id: "4", tagName: "Travel Log" },
  { id: "5", tagName: "Paradise Island" },
  { id: "6", tagName: "Travel Info" },
];

interface IProps {
  listTags?: ITagItem[];
}

export const TagGroup = ({ listTags = listTagItems }: IProps) => (
  <div className="px-[15px] py-5 bg-white-90 rounded-xl">
    <TitleSection title="Tags" />
    <div className="flex flex-wrap gap-3.5 mt-3">
      {listTags.map((tag) => {
        const { id, tagName } = tag;

        return (
          <Typography key={id} tag="p" textSize={Size.XS} additionalClasses="text-dark-75 leading-4">
            {tagName}
          </Typography>
        );
      })}
    </div>
  </div>
);
