export interface ICommentItem {
  name: string;
  email: string;
  content: string;
  avatarUrl: string;
  website: string;
  postId: number;
  createdAt: string;
};

export interface ICommentResponse {
  id: number;
  attributes: ICommentItem;
};

export interface ICommentsResponse {
  data: ICommentResponse[];
};
