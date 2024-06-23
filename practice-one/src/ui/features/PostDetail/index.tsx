// services
import {
  getCategoryById,
  getCategoryByPostId,
  getCommentByPostId,
  getPostDataById,
} from '@/services';

// utils
import generateRGBDataURL from '@/utils/color';

// componens
import Image from 'next/image';
import { Typography, Tag } from '@/ui/components';

// type
import { FontWeight, Size } from '@/types';

// icons
import { ChatBox, File, Schedule } from '@/ui/components/Icons';
import { formatDate } from '@/utils';

export default async function PostDetail({ postId }: { postId: string }) {
  const postResponse = await getPostDataById(postId);
  const { data: listComments } = await getCommentByPostId(postId);

  const { data: postCategoriesDataResponse } = await getCategoryByPostId({
    postId,
  });
  const categoryId = postCategoriesDataResponse[0]?.attributes.categoryId ?? '1';
  console.log('categoryId', categoryId);
  const categoryIdToNumber = parseInt(categoryId, 10);
  const { data: categoryDataResponse } =
    await getCategoryById(categoryIdToNumber);
  const { name: categoryType } = categoryDataResponse.attributes;

  const attributes = postResponse?.data?.attributes;

  const title = attributes?.title ?? 'Title is not available';
  const content = attributes?.content ?? 'Content is not available';
  const imageUrl = attributes?.imageUrl ?? '';
  const publicDate = formatDate(attributes?.publicationDate) ?? '';
  const commentCount = listComments?.length ?? '0';

  return (
    <section className="flex flex-1">
      <article className="flex-1">
        <div className="mb-7.5 lg:bg-white-90 lg:p-7 xl:mb-32.5 xl:h-151 rounded-xl">
          <Typography
            tag="h1"
            additionalClasses="text-md font-medium sm:text-xxl sm:font-normal mb-7"
          >
            {title}
          </Typography>
          <div className="relative mx-auto w-89.5 h-49.5 sm:w-full sm:h-84 lg:h-95 xl:w-full xl:h-134.5 2xl:h-149.5 2xl:w-268">
            <Image
              fill
              objectFit="cover"
              className="rounded-xl"
              src={imageUrl}
              alt={title}
              placeholder="blur"
              blurDataURL={generateRGBDataURL(64, 64, 64)}
              sizes="(max-width: 603px) 358px,
              (min-width: 604px) and (max-width: 1535px) 100vw,
              (min-width: 1535px) 1072px"
            />
          </div>
        </div>
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
        <section>
          {/* content */}
          {content?.split('\n').map((line, index) => (
            <Typography
              key={index}
              tag="h2"
              textSize={Size.MD}
              weight={FontWeight.Normal}
              additionalClasses="text-dark-100"
            >
              {line}
            </Typography>
          ))}
        </section>
      </article>
    </section>
  );
}
