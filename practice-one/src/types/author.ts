export interface IAuthorDataItem {
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IAuthorResponse {
  id: number;
  attributes: IAuthorDataItem;
}

export interface IAuthorDataResponse {
  data: IAuthorResponse;
}
