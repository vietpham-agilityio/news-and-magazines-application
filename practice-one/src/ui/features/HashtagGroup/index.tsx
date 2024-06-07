// static image
import ImageStore from "@/constants/images";

// components
import Image, { StaticImageData } from "next/image";

interface IHashtag {
  id: string;
  name: string;
  imageUrl: string | StaticImageData;
}

interface IProps {
  listHashtags?: IHashtag[];
}

const listHashtagsItem: IHashtag[] = [
  {
    id: "1",
    name: "Hashtag Food",
    imageUrl: ImageStore.HashtagFood,
  },
  {
    id: "2",
    name: "Hashtag Animal",
    imageUrl: ImageStore.HashtagAnimal,
  },
  {
    id: "3",
    name: "Hashtag Car",
    imageUrl: ImageStore.HashtagCar,
  },
  {
    id: "4",
    name: "Hashtag Sport",
    imageUrl: ImageStore.HashtagSport,
  },
  {
    id: "5",
    name: "Hashtag Music",
    imageUrl: ImageStore.HashtagMusic,
  },
  {
    id: "6",
    name: "Hashtag Food",
    imageUrl: ImageStore.HashtagFood,
  },
  {
    id: "7",
    name: "Hashtag Abstract",
    imageUrl: ImageStore.HashtagAbstract,
  },
  {
    id: "8",
    name: "Hashtag Animal",
    imageUrl: ImageStore.HashtagAnimal,
  },
];

export const HashtagGroup = ({ listHashtags = listHashtagsItem }: IProps) =>
  listHashtags.map((hashtag) => {
    const { id, name, imageUrl } = hashtag;
    return (
      <div key={id} className="mx-3 py-2.5 rounded-xl cursor-pointer">
        <Image
         src={imageUrl}
         alt={name}
         width={170}
         height={48}
        />
      </div>
    );
  });
