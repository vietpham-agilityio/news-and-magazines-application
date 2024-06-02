import { StaticImageData } from "next/image";

export interface ISlideItem {
  id: string;
  image: string | StaticImageData;
  title: string;
  content: string;
}
