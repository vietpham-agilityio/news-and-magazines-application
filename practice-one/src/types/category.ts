export interface CategoryDataItem {
    name: string;
    description?: string;
  }
  
  export interface CategoriesResponse {
    data: CategoryResponse[];
  }
  
export interface CategoryResponse {
    id: number;
    attributes: CategoryDataItem;
  };
  