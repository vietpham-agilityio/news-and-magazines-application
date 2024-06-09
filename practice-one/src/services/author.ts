import { SERVER_BASE_URL } from '@/constants';
import { AuthorResponse } from '@/types';

interface AuthorDataResponse {
  data: AuthorResponse;
}

async function getAuthorById(id: string): Promise<AuthorDataResponse>  {
  const res = await fetch(`${SERVER_BASE_URL}/api/authors/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export { getAuthorById };
