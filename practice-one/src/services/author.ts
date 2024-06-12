import { SERVER_BASE_URL, END_POINT } from '@/constants';
import { AuthorResponse } from '@/types';

interface AuthorDataResponse {
  data: AuthorResponse;
}

async function getAuthorById(id: string): Promise<AuthorDataResponse>  {
  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.AUTHORS}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export { getAuthorById };
