export interface IPaginationPage {
  id: number;
  pageNumber: number;
}

export interface IPaginationItem {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IPagination {
  pagination: IPaginationItem;
}
