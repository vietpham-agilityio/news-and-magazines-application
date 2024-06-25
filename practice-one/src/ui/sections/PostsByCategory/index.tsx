// service
import { getPostCategoryById } from '@/services';

// type
import { CardCategory, Pagination } from '@/ui/components';

interface IProps {
  categoryId: number;
  pageIndex: number;
}

const PostByCategory = async ({ categoryId, pageIndex }: IProps) => {
  const { data: postCategoriesDataResponse, meta } = await getPostCategoryById(
    categoryId,
    12,
    pageIndex
  );

  const { pageCount } = meta.pagination;

  return (
    <>
      <section className="new-posts lg:container flex flex-col justify-between bg-white-100">
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
};

export default PostByCategory;
