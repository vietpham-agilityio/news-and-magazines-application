import { Suspense } from 'react';

// services
import { getPostDataById } from '@/services';

// utils
import generateRGBDataURL from '@/utils/color';

// componens
import Image from 'next/image';
import { BadgeGroup } from '@/ui/features';
import { BadgeGroupSkeleton, Typography } from '@/ui/components';

// type
import { FontWeight, Size } from '@/types';

interface IProps {
  postId: string;
}

const PostDetail = async ({ postId }: IProps) => {
  const postResponse = await getPostDataById(postId);
  const attributes = postResponse?.data?.attributes;

  const title = attributes?.title ?? 'Title is not available';
  const content = attributes?.content ?? 'Content is not available';
  const imageUrl = attributes?.imageUrl ?? '';

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
        <Suspense fallback={<BadgeGroupSkeleton />}>
          <BadgeGroup postId={postId} />
        </Suspense>
        <section>
          {/* content */}
          {content?.split('\n').map((line, index) => (
            <Typography
              key={index}
              tag="h2"
              textSize={Size.MD}
              weight={FontWeight.Normal}
              additionalClasses="text-dark-100 mb-4"
            >
              {line}
            </Typography>
          ))}
        </section>
      </article>
    </section>
  );
};

export default PostDetail;
