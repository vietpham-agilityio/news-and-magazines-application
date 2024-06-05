// assets
import HashtagFood from "@/images/hashtag/hashtag-food.webp";
import HashtagCar from "@/images/hashtag/hashtag-car.webp";
import HashtagMusic from "@/images/hashtag/hashtag-music.webp";
import HashtagSport from "@/images/hashtag/hashtag-sport.webp";
import HashtagAnimal from "@/images/hashtag/hashtag-animal.webp";
import HashtagAbstract from "@/images/hashtag/hashtag-abstract.webp";

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
    imageUrl: HashtagFood,
  },
  {
    id: "2",
    name: "Hashtag Animal",
    imageUrl: HashtagAnimal,
  },
  {
    id: "3",
    name: "Hashtag Car",
    imageUrl: HashtagCar,
  },
  {
    id: "4",
    name: "Hashtag Sport",
    imageUrl: HashtagSport,
  },
  {
    id: "5",
    name: "Hashtag Music",
    imageUrl: HashtagMusic,
  },
  {
    id: "6",
    name: "Hashtag Food",
    imageUrl: HashtagFood,
  },
  {
    id: "7",
    name: "Hashtag Abstract",
    imageUrl: HashtagAbstract,
  },
  {
    id: "8",
    name: "Hashtag Animal",
    imageUrl: HashtagAnimal,
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
