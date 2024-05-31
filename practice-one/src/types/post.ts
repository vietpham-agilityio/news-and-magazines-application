export enum PostVariant {
  TRENDY = "likes",
  TOP = "views",
  POPULAR = "shared",
  NEW = "publicationDate",
}

export interface PostDataItem {
  title: string;
  content: string;
  publicationDate: string;
  imageUrl: string;
  videoUrl: string;
  authorId: string;
  views: number;
  likes: number;
  shared: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PostResponse {
  id: number;
  attributes: PostDataItem;
}
