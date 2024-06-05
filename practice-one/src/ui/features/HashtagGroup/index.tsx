// static image
import Images from "@/constants/images";

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
    imageUrl: Images.HashtagFood,
  },
  {
    id: "2",
    name: "Hashtag Animal",
    imageUrl: Images.HashtagAnimal,
  },
  {
    id: "3",
    name: "Hashtag Car",
    imageUrl: Images.HashtagCar,
  },
  {
    id: "4",
    name: "Hashtag Sport",
    imageUrl: Images.HashtagSport,
  },
  {
    id: "5",
    name: "Hashtag Music",
    imageUrl: Images.HashtagMusic,
  },
  {
    id: "6",
    name: "Hashtag Food",
    imageUrl: Images.HashtagFood,
  },
  {
    id: "7",
    name: "Hashtag Abstract",
    imageUrl: Images.HashtagAbstract,
  },
  {
    id: "8",
    name: "Hashtag Animal",
    imageUrl: Images.HashtagAnimal,
  },
];

export const HashtagGroup = ({ listHashtags = listHashtagsItem }: IProps) =>
  listHashtags.map((hashtag) => {
    const { id, name, imageUrl } = hashtag;
    return (
      <div key={id} className="mx-3 py-2.5 rounded-xl">
        <Image src={imageUrl} width={170} height={48} alt={name} />
      </div>
    );
  });
