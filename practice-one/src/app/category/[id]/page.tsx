import { Suspense } from 'react';

// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listTypePosts } from '@/mocks';

// services
import { getCategoryById } from '@/services';

// components
import {
  BreadCrumbs,
  CardCategorySkeleton,
  TitleSection,
  Typography,
} from '@/ui/components';
import { PostByCategory } from '@/ui/sections';

// types
import { IBreadCrumbItem, Size, FontWeight } from '@/types';

interface IProps {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
}

const CategoryPage = async ({ params: { id }, searchParams }: IProps) => {
  const { data: categoryDataResponse } = await getCategoryById(id);

  const { name: categoryType } = categoryDataResponse.attributes;

  const pageIndex =
    typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;

  const listBreadCrumb: IBreadCrumbItem[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: categoryType,
      path: `/category/${id}`,
    },
  ];

  const listTypeContents = listTypePosts.map((type, index) => {
    const isActive = index === 0;

    return (
      <Typography
        key={type}
        tag="h2"
        textSize={Size.XS}
        weight={FontWeight.Medium}
        additionalClasses={`pr-5 ${isActive ? 'text-dark-100' : 'text-dark-75'}`}
      >
        {type}
      </Typography>
    );
  });

  return (
    <main className="mx-2 sm:mx-6 lg:container lg:mx-auto">
      <div className="ml-2 my-7.5 sm:my-11">
        <BreadCrumbs listBreadCrumb={listBreadCrumb} />
      </div>
      <div className={`${flexItemCenter} h-12 bg-white-90 rounded-xl p-4`}>
        {listTypeContents}
      </div>
      <div className="mt-7.5 sm:mt-11 lg:mt-9">
        <TitleSection isDisableButton title={`Category : ${categoryType}`} />
      </div>
      {/* new posts */}
      <Suspense fallback={<CardCategorySkeleton count={12} />}>
        <PostByCategory categoryId={id} pageIndex={pageIndex} />
      </Suspense>
    </main>
  );
};

export default CategoryPage;
