// types
import {
  ICategoriesResponse,
  ICategoryResponse,
  IPostCategoriesResponse,
} from '@/types';

// constants
import {
  MESSAGE,
  SERVER_BASE_URL,
  END_POINT,
  ATTRIBUTE_TYPE,
} from '@/constants';

const getCategoryData = async ({
  limit = 10,
  page = 1,
}: {
  limit?: number;
  page?: number;
} = {}): Promise<ICategoriesResponse> => {
  const query = `pagination[page]=${page}&pagination[pageSize]=${limit}`;

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}?${query}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
};

const getCategoryById = async (id: number): Promise<ICategoryResponse> => {
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
};

const getPostCategoryById = async (
  categoryId: number,
  limit: number = 12,
  page: number = 1
): Promise<IPostCategoriesResponse> => {
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
};

const getCategoryByPostId = async ({
  postId,
  limit = 10,
  page = 1,
}: {
  postId: string;
  limit?: number;
  page?: number;
}): Promise<IPostCategoriesResponse> => {
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
};

export {
  getCategoryData,
  getPostCategoryById,
  getCategoryByPostId,
  getCategoryById,
};
