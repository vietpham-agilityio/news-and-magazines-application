// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listTypePosts } from '@/mocks';

// services
import { getCategoryById } from '@/services';

// components
import {
  BreadCrumbs,
  Typography,
} from '@/ui/components';

// types
import { IBreadCrumbItem, Size, FontWeight } from '@/types';
import PostByCategory from '@/ui/features/PostsByCategory';

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data: categoryDataResponse } = await getCategoryById(id);

  const { name: categoryType } = categoryDataResponse.attributes;

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
      {/* new posts */}
    <PostByCategory categoryId={id} />
    </main>
  );
}
