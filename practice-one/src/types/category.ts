import { IPagination } from "./pagination";

export interface ICategoryDataItem {
  name: string;
  description?: string;
}

export interface ICategoriesResponse {
  data: ICategoryItem[];
}

export interface ICategoryResponse {
  data: ICategoryItem;
}

export interface ICategoryItem {
  id: number;
  attributes: ICategoryDataItem;
}

export interface IPostCategoriesDataItem {
  postId: string,
  categoryId: string,
}
export interface IPostCategoriesItem {
  id: number;
  attributes: IPostCategoriesDataItem
}

export interface IPostCategoriesResponse {
  data: IPostCategoriesItem[];
  meta: IPagination,
}