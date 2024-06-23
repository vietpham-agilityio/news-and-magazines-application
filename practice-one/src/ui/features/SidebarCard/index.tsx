// components
import { Title, PaperPost } from '@/ui/components';

// types
import { PostResponse, PostVariant } from '@/types';

// services
import { getPostDataByAttribute } from '@/services';

export const SidebarCard = async () => {
  const { data: postDataResponse } = await getPostDataByAttribute({
    attribute: PostVariant.TOP,
    limit: 6,
  });
  return (
    <div className="px-[15px] py-5 bg-white-90 rounded-xl">
      <Title title="Top Posts" />
      <div className="mt-5">
        {postDataResponse.map((post: PostResponse, index) => {
          const { title, content, imageUrl } = post.attributes;
          return (
            <div
              key={post.id}
              className={`${index !== postDataResponse.length - 1 && 'mb-5'}`}
            >
              <PaperPost
                id={post.id}
                title={title}
                content={content}
                imageSrc={imageUrl}
                alt={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
