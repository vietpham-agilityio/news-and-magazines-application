export interface AuthorDataItem {
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

export interface AuthorResponse {
  id: number;
  attributes: AuthorDataItem;
}
