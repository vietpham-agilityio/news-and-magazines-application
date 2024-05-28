// assets
import CarImage from "@/images/Car.png";
import FrogImage from "@/images/Frog.png";
import FoodImage from "@/images/Food.png";
import PersonOne from "@/images/Person_Dance.png";
import PersonTwo from "@/images/Person_Play.png";

// types
import { StaticImageData } from "next/image";

// components
import { TitleSection, CardPost } from "@/ui/components";

interface IPostItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string | StaticImageData;
  alt: string;
}

const listPostItems: IPostItem[] = [
  {
    id: "1",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: CarImage,
    alt: "Top post",
  },
  {
    id: "2",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: FrogImage,
    alt: "Top post",
  },
  {
    id: "3",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: PersonOne,
    alt: "Top post",
  },
  {
    id: "4",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: FoodImage,
    alt: "Top post",
  },
  {
    id: "5",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: PersonTwo,
    alt: "Top post",
  },
];

interface IProps {
  listPosts?: IPostItem[];
}

export const SidebarCard = ({ listPosts = listPostItems }: IProps) => (
  <div className="px-[15px] py-5 bg-white-90 rounded-xl">
    <TitleSection title="Top Posts" />
    <div className="mt-5">
      {listPosts.map((post, index) => {
        const { id, content, title, imageUrl, alt } = post;

        return (
          <div
            key={id}
            className={`${index !== listPosts.length - 1 && "mb-5"}`}
          >
            <CardPost
              title={title}
              content={content}
              imageSrc={imageUrl}
              alt={alt}
            />
          </div>
        );
      })}
    </div>
  </div>
);
