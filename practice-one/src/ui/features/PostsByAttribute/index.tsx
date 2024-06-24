// service
import { getPostDataByAttribute } from '@/services';

// component
import CardPost from '@/ui/components/Card/CardPost';

// type
import { PostVariant, PostResponse } from '@/types';
import { CardType } from '@/types';

export default async function PostByAttribute({
  attribute,
  cardType,
  isMarginSmall = false,
}: {
  attribute: PostVariant;
  cardType: CardType;
  isMarginSmall?: boolean;
}) {
  const { data: postDataResponse = [] } =
    await getPostDataByAttribute({attribute});
  const typeCardPost = cardType === 'isVertical';

  return (
    <div
      className={`${isMarginSmall && 'mx-2 md:mx-0.5'} pb-2 card-group flex gap-6 overflow-x-scroll lg:mx-0`}
    >
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
}
