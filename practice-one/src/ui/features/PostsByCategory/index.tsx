// service
import {
  getCategoryById,
  getPostCategoryById,
} from '@/services';

// type
import { CardCategory, Pagination, TitleSection } from '@/ui/components';

export default async function PostByCategory({
  categoryId,
  pageIndex,
}: {
  categoryId: number;
  pageIndex: number;
}) {
  const { data: categoryDataResponse } = await getCategoryById(categoryId);
  const { data: postCategoriesDataResponse, meta } = await getPostCategoryById( categoryId, 12, pageIndex);

  const { name: categoryType } = categoryDataResponse.attributes;
  const { pageCount} = meta.pagination;

  return (
    <>
      <section className="new-posts lg:container flex flex-col justify-between bg-white-100">
        <div className="mt-7.5 sm:mt-11 lg:mt-9">
          <TitleSection isDisableButton title={`Category : ${categoryType}`} />
        </div>
        <div className="card-group grid grid-cols-12 grid-rows-3 gap-5 sm:gap-6">
          {postCategoriesDataResponse.map(post => {
            return (
              <div
                className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
                key={post.id}
              >
                <CardCategory id={post.attributes.postId} />
              </div>
            );
          })}
        </div>
      </section>
      <Pagination pageCount={pageCount} categoryId={categoryId} />
    </>
  );
}
