import {
  ATTRIBUTE_TYPE,
  END_POINT,
  MESSAGE,
  SERVER_BASE_URL,
} from '@/constants';

// types
import { CommentsResponse } from '@/types';

async function getCommentByPostId(postId: number): Promise<CommentsResponse> {
  const query = `filters[${ATTRIBUTE_TYPE.POST_ID}][$eq]=${postId}`;

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.COMMENTS}?${query}`,
    {
      next: { tags: ['collect-comments'] },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

export { getCommentByPostId };
