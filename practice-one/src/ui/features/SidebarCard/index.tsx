// static image
import ImageStore from "@/constants/images";

// components
import { Title, PaperPost } from "@/ui/components";

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
    imageUrl: ImageStore.CarImage,
    alt: "Top post",
  },
  {
    id: "2",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: ImageStore.FrogImage,
    alt: "Top post",
  },
  {
    id: "3",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: ImageStore.PersonOne,
    alt: "Top post",
  },
  {
    id: "4",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: ImageStore.FoodImage,
    alt: "Top post",
  },
  {
    id: "5",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl: ImageStore.PersonTwo,
    alt: "Top post",
  },
];

export const SidebarCard = ({ listPosts = listPostItems }: IProps) => (
  <div className="px-[15px] py-5 bg-white-90 rounded-xl">
    <Title title="Top Posts" />
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
