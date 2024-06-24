// services
import {
  getCategoryById,
  getCategoryByPostId,
  getCommentByPostId,
  getPostDataById,
} from '@/services';

// componens
import { Tag } from '@/ui/components';

// icons
import { ChatBox, Schedule, File } from '@/ui/components/Icons';

// utils
import { formatDate } from '@/utils';

interface IProps {
  postId: string;
}

export default async function BadgeGroup({ postId }: IProps) {
  const postResponse = await getPostDataById(postId);
  const { data: listComments } = await getCommentByPostId(postId);

  const { data: postCategoriesDataResponse } = await getCategoryByPostId({
    postId,
  });
  const categoryId =
    postCategoriesDataResponse[0]?.attributes.categoryId ?? '1';
  const categoryIdToNumber = parseInt(categoryId, 10);
  const { data: categoryDataResponse } =
    await getCategoryById(categoryIdToNumber);
  const { name: categoryType } = categoryDataResponse.attributes;

  const attributes = postResponse?.data?.attributes;
  const publicDate = formatDate(attributes?.publicationDate) ?? '';
  const commentCount = listComments?.length ?? '0';

  return (
    <div className="flex w-full justify-evenly mx-auto mb-12 xl:w-2/4">
      <Tag icon={<Schedule />} content={publicDate} />
      <Tag
        icon={<ChatBox />}
        content={`Comments: ${commentCount}`}
        additionalClass="hidden sm:flex"
      />
      <Tag
        icon={<File />}
        content={`Categories: ${categoryType}`}
        additionalClass="hidden sm:flex"
      />
      <Tag
        icon={<ChatBox />}
        content={`${commentCount}`}
        additionalClass="sm:hidden"
      />
      <Tag
        icon={<File />}
        content={`${categoryType}`}
        additionalClass="sm:hidden"
      />
    </div>
  );
}
