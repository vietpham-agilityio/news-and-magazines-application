import { memo } from 'react';

// service
import { getPostDataByAttribute } from '@/services';

// component
import CardPost from '@/ui/components/Card/CardPost';

// type
import { PostVariant, PostResponse } from '@/types';
import { CardType } from '@/types';

export default memo(async function PostByAttribute({
  attribute,
  cardType,
}: {
  attribute: PostVariant;
  cardType: CardType;
}) {
  const { data: postDataResponse } = await getPostDataByAttribute(attribute);
  const typeCardPost = cardType === 'isVertical';

  return (
    <div className="card-group flex gap-6 overflow-x-scroll">
      {postDataResponse.map((post: PostResponse) => {
        const { title, content, imageUrl, authorId, publicationDate } =
          post.attributes;
        return (
          <CardPost
            isVertical={typeCardPost}
            key={post.id}
            id={post.id.toString()}
            title={title}
            alt={title}
            content={content}
            imageSrc={imageUrl}
            authorId={authorId}
            information={publicationDate}
          />
        );
      })}
    </div>
  );
});
