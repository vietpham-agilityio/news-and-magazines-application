import { StaticImageData } from "next/image";

export interface ITagItem {
  id: string;
  tagName: string;
};

export interface IHashtag {
  id: string;
  name: string;
  imageUrl: string | StaticImageData;
}