// components
import { Comment } from '@/ui/components';

// types
import { getCommentByPostId } from '@/services';

// utils
import { formatDate } from '@/utils';

interface IProps {
  postId: number;
}

export default async function CommentGroup({ postId }: IProps) {
  const { data: listComments } = await getCommentByPostId(postId);

  return (
    <div className="flex flex-col gap-9 mt-7.5 mb-10 sm:mb-12 lg:mb-15">
      {listComments.map(comment => {
        const { name, content, createdAt } = comment.attributes;
        return (
          <Comment
            key={comment.id}
            userName={name}
            content={content}
            publicDate={formatDate(createdAt)}
          />
        );
      })}
    </div>
  );
}
