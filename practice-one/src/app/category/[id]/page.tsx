// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listTypePosts } from '@/mocks';
import { getCategoryById, getPostCategoryById } from '@/services';
import { IBreadCrumbItem, CardType } from '@/types';
import { BreadCrumbs, CardPost, TitleSection } from '@/ui/components';

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
                <CardPost
                  isVertical
                  key={post.id}
                  id={post.id.toString()}
                  title="Go Home After Long Time"
                  alt="Go Home After Long Time"
                  content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
                  imageSrc="https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                  authorId={'2'}
                  information="2024-6-1"
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
