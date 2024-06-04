import { memo } from 'react';

// services
import { getPostDataById } from '@/services';

// componens
import Image from 'next/image';
import { Typography, Tag } from '@/ui/components';

// type
import { FontWeight, Size } from '@/types';
import { ChatBox, File, Schedule } from '@/ui/components/Icons';

export default memo(async function PostDetail({ postId }: { postId: number }) {
  const postResponse = await getPostDataById(postId);

  const { title, content, imageUrl } = postResponse.data.attributes;

  return (
    <section>
      <article className="flex-1 mb-17.5">
        <div className="mb-7.5 lg:bg-white-90 lg:p-7 xl:mb-[130px] xl:h-[604px] rounded-xl">
          <Typography
            tag="h1"
            additionalClasses="text-md font-medium sm:text-xxl sm:font-normal mb-7"
          >
            {title}
          </Typography>
          <Image
            className="mx-auto rounded-xl w-[358px] h-[198px] sm:w-full sm:h-[336px] lg:h-[460px] xl:w-full xl:h-[538px] 2xl:h-[598px] 2xl:w-[1072px]"
            src={imageUrl}
            alt={title}
            width={1072}
            height={598}
          />
        </div>
        <div className="flex w-full justify-evenly mx-auto mb-12 xl:w-2/4">
          <Tag icon={<Schedule />} content="July 14 , 2022" />
          <Tag icon={<ChatBox />} content="Comments: 35" />
          <Tag icon={<File />} content="Categories: Sport" />
        </div>
        <section>
          {/* content */}
          {content?.split('\n').map((line, index) => (
            <Typography
              key={index}
              tag="p"
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
});
