// services
import { getPostDataById } from '@/services';

// componens
import Image from 'next/image';
import { Typography, Tag } from '@/ui/components';

// type
import { FontWeight, Size } from '@/types';

// icons
import { ChatBox, File, Schedule } from '@/ui/components/Icons';

export default async function PostDetail({ postId }: { postId: number }) {
  const postResponse = await getPostDataById(postId);

  const { title, content, imageUrl } = postResponse.data.attributes;

  return (
    <section className="flex flex-1">
      <article className="flex-1 mb-17.5">
        <div className="mb-7.5 lg:bg-white-90 lg:p-7 xl:mb-[130px] xl:h-[604px] rounded-xl">
          <Typography
            tag="h1"
            additionalClasses="text-md font-medium sm:text-xxl sm:font-normal mb-7"
          >
            {title}
          </Typography>
          <div className="relative mx-auto w-[358px] h-[198px] sm:w-full sm:h-[336px] lg:h-[380px] xl:w-full xl:h-[538px] 2xl:h-[598px] 2xl:w-[1072px]">
            <Image
              fill
              objectFit='cover'
              className="rounded-xl"
              src={imageUrl}
              alt={title}
            />
          </div>
        </div>
        <div className="flex w-full justify-evenly mx-auto mb-12 xl:w-2/4">
          <Tag icon={<Schedule />} content="July 14 , 2022" />
          <Tag
            icon={<ChatBox />}
            content="Comments: 35"
            additionalClass="hidden sm:flex"
          />
          <Tag
            icon={<File />}
            content="Categories: Sport"
            additionalClass="hidden sm:flex"
          />
          <Tag icon={<ChatBox />} content="35" additionalClass="sm:hidden" />
          <Tag icon={<File />} content="Sport" additionalClass="sm:hidden" />
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
