export interface PaginationPage {
  id: number;
  pageNumber: number;
}

export interface PaginationItem {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Pagination {
  pagination: PaginationItem;
}
