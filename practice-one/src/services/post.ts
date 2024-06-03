import { PostResponse, PostVariant } from '@/types';
import { SERVER_BASE_URL } from '@/constants';

interface PostsResponse {
  data: PostResponse[];
}

interface PostDataResponse {
  data: PostResponse;
}

async function getPostDataByAttribute(
  attribute: PostVariant
): Promise<PostsResponse> {
  const queryByAttribute = `sort=${attribute}:desc`;

  const res = await fetch(`${SERVER_BASE_URL}/api/posts?${queryByAttribute}`, {
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

  const res = await fetch(`${SERVER_BASE_URL}/api/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export { getPostDataByAttribute, getPostDataById };
