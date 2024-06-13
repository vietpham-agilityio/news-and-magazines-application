export interface AuthorDataItem {
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AuthorResponse {
  id: number;
  attributes: AuthorDataItem;
}

export interface AuthorDataResponse {
  data: AuthorResponse;
}
