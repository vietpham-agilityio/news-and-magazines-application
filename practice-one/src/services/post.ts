import { PostDataResponse, PostVariant, PostsResponse } from '@/types';
import { MESSAGE, SERVER_BASE_URL, END_POINT } from '@/constants';
import { notFound } from 'next/navigation';

async function getPostDataByAttribute(
  attribute: PostVariant,
  limit: number = 10,
  page: number = 1
): Promise<PostsResponse> {
  const queryObject = {
    populate: '*',
    'pagination[pageSize]': `${limit}`,
    'pagination[page]': `${page}`,
    sort: `${attribute}:desc`,
  };

  const query = new URLSearchParams(queryObject).toString();

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.POSTS}?${query}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

async function getPostDataById(id: string): Promise<PostDataResponse> {
  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.POSTS}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(MESSAGE.NOT_FOUND);
    notFound();
  }

  const data = res.json();

  return data;
}

export { getPostDataByAttribute, getPostDataById };
