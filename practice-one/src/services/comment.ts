'use server';

import { revalidateTag } from 'next/cache';

import {
  ATTRIBUTE_TYPE,
  END_POINT,
  MESSAGE,
  SERVER_BASE_URL,
} from '@/constants';

// types
import { CommentsResponse } from '@/types';

async function getCommentByPostId(postId: string): Promise<CommentsResponse> {
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

async function createComment(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    postId: formData.get('postId'),
    content: formData.get('content'),
    website: formData.get('website'),
  };

  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.COMMENTS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        ...rawFormData,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  revalidateTag('collect-comments');

  return res.json();
}

export { getCommentByPostId, createComment };
