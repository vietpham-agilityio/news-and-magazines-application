// types
import { ITagItem, Size } from '@/types';

// mocks
import { listTagItems } from '@/mocks';

// components
import { TitleSection, Typography } from '@/ui/components';

interface IProps {
  listTags?: ITagItem[];
}

export const TagGroup = ({ listTags = listTagItems }: IProps) => (
  <div className="h-full px-[15px] py-5 bg-white-90 rounded-xl">
    <TitleSection title="Tags" />
    <div className="flex flex-wrap gap-3.5 mt-3">
      {listTags.map(tag => {
        const { id, tagName } = tag;

        return (
          <Typography
            key={id}
            tag="h2"
            textSize={Size.XS}
            additionalClasses="text-dark-75 leading-4"
          >
            {tagName}
          </Typography>
        );
      })}
    </div>
  </div>
);
