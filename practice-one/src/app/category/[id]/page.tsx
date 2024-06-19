// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listTypePosts } from '@/mocks';
import { getCategoryById, getPostCategoryById } from '@/services';
import { IBreadCrumbItem, CardType } from '@/types';
import { BreadCrumbs, CardCategory, CardPost, TitleSection } from '@/ui/components';

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
      <h6
        key={type}
        className={`text-xs pr-5 ${isActive ? 'text-primary-100' : 'text-dark-75'}`}
      >
        {type}
      </h6>
    );
  });

  return (
    <main className="container mx-auto">
      <div className="my-7.5 sm:my-12">
        <BreadCrumbs listBreadCrumb={listBreadCrumb} />
      </div>
      <div className={`${flexItemCenter} h-12 bg-white-90 rounded-xl p-4`}>
        {listTypeContents}
      </div>
      {/* new posts */}
      <section className="new-posts container flex flex-col justify-between bg-white-100">
        <div className="mt-7.5 mb-5 sm:mt-11 sm:mb-12">
          <TitleSection title={`Category : ${categoryType}`}/>
        </div>
        <div className="card-group grid grid-cols-12 grid-rows-3 gap-5 sm:gap-6">
            {postCategoriesDataResponse.map(post => {
              return (
                <div className="col-span-12 lg:col-span-3" key={post.id}>
                <CardCategory id={post.id}
                />
            </div>
              );
            })}
          </div>
      </section>
      <div
        className={`h-10 bg-white-90 mt-10 mb-30 sm:mt-11 sm:mb-12 lg:mb-25 ${flexItemCenter}`}
      >
        <p>Navigation</p>
      </div>
    </main>
  );
}
