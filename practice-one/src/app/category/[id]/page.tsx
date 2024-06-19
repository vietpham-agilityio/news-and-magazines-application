// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listPaginationPage, listTypePosts } from '@/mocks';
import { getCategoryById, getPostCategoryById } from '@/services';
import { IBreadCrumbItem, CardType, Size, FontWeight } from '@/types';
import { BreadCrumbs, CardCategory, CardPost, Pagination, TitleSection, Typography } from '@/ui/components';

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data: categoryDataResponse } = await getCategoryById(id);

  const { data: postCategoriesDataResponse } = await getPostCategoryById(id);

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
        tag='h2'
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
      <section className="new-posts lg:container flex flex-col justify-between bg-white-100">
        <div className="mt-7.5 sm:mt-11 lg:mt-9">
          <TitleSection isDisableButton title={`Category : ${categoryType}`} />
        </div>
        <div className="card-group grid grid-cols-12 grid-rows-3 gap-5 sm:gap-6">
            {postCategoriesDataResponse.map(post => {
              return (
                <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3" key={post.id}>
                <CardCategory id={post.id}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Pagination listPagination={listPaginationPage} />
    </main>
  );
}
