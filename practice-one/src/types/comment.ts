export interface CommentItem {
  name: string;
  email: string;
  content: string;
  avatarUrl: string;
  website: string;
  postId: number;
  createdAt: string;
};

export interface CommentResponse {
  id: number;
  attributes: CommentItem;
};

export interface CommentsResponse {
  data: CommentResponse[];
};
