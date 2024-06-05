// assets
import CarImage from '@/images/square/car.webp';
import FrogImage from '@/images/square/frog.webp';
import FoodImage from '@/images/square/food.webp';
import PersonOne from '@/images/square/person-dance.webp';
import PersonTwo from '@/images/square/person-play.webp';

// components
import { TitleSection, PaperPost } from "@/ui/components";

// types
import { IPostItem } from "@/types";

interface IProps {
  listPosts?: IPostItem[];
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
            <PaperPost
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
