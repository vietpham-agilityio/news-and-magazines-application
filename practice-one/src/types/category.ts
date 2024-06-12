export interface CategoryDataItem {
    name: string;
    description?: string;
  }
  

export interface CategoryResponse {
    id: number;
    attributes: CategoryDataItem;
  };
  