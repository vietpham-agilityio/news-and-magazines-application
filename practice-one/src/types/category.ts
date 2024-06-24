import { Pagination } from "./pagination";

export interface CategoryDataItem {
  name: string;
  description?: string;
}

export interface CategoriesResponse {
  data: CategoryItem[];
}

export interface CategoryResponse {
  data: CategoryItem;
}

export interface CategoryItem {
  id: number;
  attributes: CategoryDataItem;
}

export interface PostCategoriesDataItem {
  postId: string,
  categoryId: string,
}
export interface PostCategoriesItem {
  id: number;
  attributes: PostCategoriesDataItem
}

export interface PostCategoriesResponse {
  data: PostCategoriesItem[];
  meta?: Pagination,
}