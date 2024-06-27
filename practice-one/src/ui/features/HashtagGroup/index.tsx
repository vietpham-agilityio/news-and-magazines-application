// types
import { IHashtag } from "@/types";
import { LazyImage } from "@/ui/components";

interface IProps {
  listHashtags: IHashtag[];
}

export const HashtagGroup = ({ listHashtags }: IProps) =>
  listHashtags.map((hashtag) => {
    const { id, name, imageUrl } = hashtag;
    return (
      <div key={id} className="mx-3 py-2.5 rounded-xl cursor-pointer">
        <LazyImage
         src={imageUrl}
         alt={name}
         width={170}
         height={48}
        />
      </div>
    );
  });
