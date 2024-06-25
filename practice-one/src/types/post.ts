import { StaticImageData } from "next/image";

export enum PostVariant {
  TRENDY = "likes",
  TOP = "views",
  POPULAR = "shared",
  NEW = "publicationDate",
}

export interface IPostDataItem {
  title: string;
  content: string;
  publicationDate: string;
  imageUrl: string;
  authorId: string;
  views: number;
  likes: number;
  shared: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IPostResponse {
  id: number;
  attributes: IPostDataItem;
}

export interface IPostItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string | StaticImageData;
  alt: string;
}

export interface IPostsResponse {
  data: IPostResponse[];
}

export interface IPostDataResponse {
  data: IPostResponse;
}
