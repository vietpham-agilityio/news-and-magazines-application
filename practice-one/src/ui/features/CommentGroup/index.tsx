// components
import { Comment, Typography } from '@/ui/components';

// services
import { getCommentByPostId } from '@/services';

// types
import { FontWeight } from '@/types';

// utils
import { formatDate } from '@/utils';

interface IProps {
  postId: string;
}

const CommentGroup = async ({ postId }: IProps) => {
  const { data: listComments } = await getCommentByPostId(postId);

  if (listComments.length === 0) {
    return (
      <div className="flex justify-center py-10">
        <Typography
          tag="h3"
          weight={FontWeight.Light}
          additionalClasses="text-sm text-black-75 leading-5"
        >
          This article has no comments
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-9 mb-10 sm:mb-12 lg:mb-15">
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
};

export default CommentGroup;
