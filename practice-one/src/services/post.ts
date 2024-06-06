import { PostResponse, PostVariant } from '@/types';
import { SERVER_BASE_URL } from '@/constants';

interface PostsResponse {
  data: PostResponse[];
}

interface PostDataResponse {
  data: PostResponse;
}

async function getPostDataByAttribute(
  attribute: PostVariant,
  limit: number = 10,
  page: number = 1,
): Promise<PostsResponse> {
  const queryObject = {
    populate: '*',
    'pagination[pageSize]': `${limit}`,
    'pagination[page]': `${page}`,
    sort: `${attribute}:desc`,
  };

  const query = new URLSearchParams(queryObject).toString();


  const res = await fetch(`${SERVER_BASE_URL}/api/posts?${query}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

async function getPostDataById(
  id: number
): Promise<PostDataResponse> {

  const res = await fetch(`${SERVER_BASE_URL}/api/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export { getPostDataByAttribute, getPostDataById };
