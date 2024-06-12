// This page is deprecated and will be removed

// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listTypePosts } from '@/mocks';

export default function CategoryPage() {
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
      <p className="text-p font-normal my-7.5 sm:my-12">Home</p>
      <div className={`${flexItemCenter} h-12 bg-white-90 rounded-xl p-4`}>
        {listTypeContents}
      </div>
      {/* new posts */}
      <section className="new-posts container flex flex-col justify-between bg-white-100">
        <div>
          <h4 className="text-md mt-7.5 mb-5 sm:mt-11 sm:mb-12">
            Category: Sport
          </h4>
        </div>
        <div className="card-group grid grid-cols-12 grid-rows-3 gap-5 sm:gap-6">
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
          <div className="h-[385px] sm:h-[210px] lg:h-[369px] col-span-12 lg:col-span-3 bg-dark-25 flex items-center justify-center">
            <p>New posts</p>
          </div>
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
