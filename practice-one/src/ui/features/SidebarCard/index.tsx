// components
import { TitleSection, CardPost } from "@/ui/components";

interface IPostItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  alt: string;
}

const listPostItems: IPostItem[] = [
  {
    id: "1",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl:
      "https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww",
    alt: "Top post",
  },
  {
    id: "2",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl:
      "https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww",
    alt: "Top post",
  },
  {
    id: "3",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl:
      "https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww",
    alt: "Top post",
  },
  {
    id: "4",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl:
      "https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww",
    alt: "Top post",
  },
  {
    id: "5",
    title: "How to Spend the Perfect Day on Croatia’s Most Magical Island",
    content: "Subhead",
    imageUrl:
      "https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww",
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
