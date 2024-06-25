'use server';

import { z } from 'zod';
import { revalidateTag } from 'next/cache';

// constants
import {
  ATTRIBUTE_TYPE,
  END_POINT,
  MESSAGE,
  SERVER_BASE_URL,
} from '@/constants';

// types
import { ICommentsResponse } from '@/types';

interface ICommentParam {
  limit?: number;
}

const schemaForm = z.object({
  postId: z.string().min(1),
  name: z.string().min(1, 'Please enter your name'),
  email: z
    .string()
    .email('Please enter a valid email. example: your@example.com'),
  content: z.string().min(1, 'Please write your comment'),
  website: z.string().url('Please enter URL. example: http://www.example.com'),
});

const getCommentByPostId = async (
  postId: string
): Promise<ICommentsResponse> => {
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
};

const getLatestComment = async ({
  limit = 10,
}: ICommentParam): Promise<ICommentsResponse> => {
  const query = `pagination[page]=1&pagination[pageSize]=${limit}&sort[0]=createdAt:desc`;

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.COMMENTS}?${query}`,
    {
      next: { tags: ['latest-comments'] },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
};

const createComment = async (prevState: any, formData: FormData) => {
  const validatedFields = schemaForm.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    postId: formData.get('postId'),
    content: formData.get('content'),
    website: formData.get('website'),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.errors.reduce(
      (acc: Record<string, string>, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      },
      {}
    );

    return {
      message: errors,
    };
  }

  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.COMMENTS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: validatedFields.data,
    }),
  });

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  revalidateTag('collect-comments');
  revalidateTag('latest-comments')

  return res.json();
};

export { getCommentByPostId, createComment, getLatestComment };
