// service
import { getPostDataByAttribute } from '@/services';

// component
import CardPost from '@/ui/components/Card/CardPost';

// type
import { PostVariant, IPostResponse } from '@/types';
import { CardType } from '@/types';

export default async function PostGrid({
  attribute,
  cardType,
}: {
  attribute: PostVariant;
  cardType: CardType;
}) {
  const { data: postDataResponse = [] } = await getPostDataByAttribute({attribute, limit: 6});
  const typeCardPost = cardType === 'isVertical';

  return (
    <div className="grid sm:h-[1403px] 2xl:h-196 grid-cols-12 grid-rows-3 gap-6 m-auto py-2 overflow-hidden">
      {postDataResponse.map((post: IPostResponse) => {
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
}
