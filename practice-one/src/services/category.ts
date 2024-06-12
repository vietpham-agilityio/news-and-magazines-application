import { CategoryResponse } from '@/types';
import { MESSAGE, SERVER_BASE_URL, END_POINT } from '@/constants';

interface CategoriesResponse {
  data: CategoryResponse[];
}

async function getCategoryData(): Promise<CategoriesResponse> {
  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

export { getCategoryData };
