import {
  CategoriesResponse,
  CategoryResponse,
  PostCategoriesResponse,
} from '@/types';
import {
  MESSAGE,
  SERVER_BASE_URL,
  END_POINT,
  ATTRIBUTE_TYPE,
} from '@/constants';

async function getCategoryData({
  limit = 10,
  page = 1,
}: {
  limit?: number;
  page?: number;
} = {}): Promise<CategoriesResponse> {
  const query = `pagination[page]=${page}&pagination[pageSize]=${limit}`;

  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}?${query}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

async function getCategoryById(id: number): Promise<CategoryResponse> {
  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}/${id}`,
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

async function getPostCategoryById(
  categoryId: number,
  limit: number = 12,
  page: number = 1
): Promise<PostCategoriesResponse> {
  const query = `filters[${ATTRIBUTE_TYPE.CATEGORY_ID}][$eq]=${categoryId}&pagination[page]=${page}&pagination[pageSize]=${limit}`;

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

async function getCategoryByPostId({
  postId,
  limit = 10,
  page = 1,
}: {
  postId: string,
  limit?: number;
  page?: number;
}): Promise<PostCategoriesResponse> {
  const query = `filters[${ATTRIBUTE_TYPE.POST_ID}][$eq]=${postId}&pagination[page]=${page}&pagination[pageSize]=${limit}`;

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

export { getCategoryData, getPostCategoryById, getCategoryByPostId, getCategoryById };
