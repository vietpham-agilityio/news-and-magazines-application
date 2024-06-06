import { memo } from 'react';

// service
import { getPostDataByAttribute } from '@/services';

// component
import CardPost from '@/ui/components/Card/CardPost';

// type
import { PostVariant, PostResponse } from '@/types';
import { CardType } from '@/types';

export default memo(async function PostGrid({
  attribute,
  cardType,
}: {
  attribute: PostVariant;
  cardType: CardType;
}) {
  const { data: postDataResponse } = await getPostDataByAttribute(attribute, 6);
  const typeCardPost = cardType === 'isVertical';

  return (
    <div className="grid h-[784px] grid-cols-12 grid-rows-3 gap-6 m-auto overflow-hidden">
      {postDataResponse.map((post: PostResponse) => {
        const { title, content, imageUrl, authorId, publicationDate } =
          post.attributes;
        return (
          <div key={post.id} className="col-span-12 2xl:col-span-6">
            <CardPost
              isVertical={typeCardPost}
              id={post.id.toString()}
              title={title}
              alt={title}
              content={content}
              imageSrc={imageUrl}
              authorId={authorId}
              information={publicationDate}
            />
          </div>
        );
      })}
    </div>
  );
});
