import { CategoriesResponse } from '@/types';
import {
  MESSAGE,
  SERVER_BASE_URL,
  END_POINT,
  ATTRIBUTE_TYPE,
} from '@/constants';

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

async function getPostCategoryById(
  categoryId: string,
  attribute: string = ATTRIBUTE_TYPE.CATEGORY_ID
) {
  const query = `filters[${attribute}][$eq]=${categoryId}`;

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.POST_CATEGORIES}?${query}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

export { getCategoryData, getPostCategoryById };
