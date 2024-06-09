// components
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Avatar, Typography } from '@/ui/components';
import { SaveTag } from '@/ui/components/Icons';

// types
import { FontWeight, Size } from '@/types';

// services
import { getAuthorById } from '@/services';

export default async function CardPost({
  id,
  title,
  content,
  imageSrc,
  alt,
  authorId,
  information,
  isVertical,
}: {
  id: string;
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
  authorId: string;
  information: string;
  isVertical?: boolean;
}) {
  const { data: author } = await getAuthorById(authorId);

  return (
    <Link href={`articles/${id}`}>
      <div
        className={`bg-white-100 flex flex-col items-center justify-center p-2.5 shadow-custom rounded-xl hover:cursor-pointer hover:opacity-90
      ${
        isVertical
          ? 'w-[358px] h-[385px] sm:h-100 lg:h-[389px] sm:w-[370px] lg:w-[360px]'
          : 'sm:flex-row lg:h-[210px] lg:w-[744px] gap-2.5'
      }`}
      >
        <div className={`relative w-84.5 h-46.5 ${isVertical ? 'sm:w-87.5 sm:h-50' : 'sm:w-[190px] sm:[190px]'} lg:w-85 lg:h-47.5`}>
          <Image className='rounded-xl' fill src={imageSrc} alt={alt} objectFit='cover' />
        </div>
        {/* card body */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-4 p-4">
            <Typography
              tag="h2"
              textSize={Size.SM}
              additionalClasses="text-dark-100 text-ellipsis overflow-hidden"
            >
              {title}
            </Typography>
            <Typography
              tag="h3"
              textSize={Size.XSM}
              weight={FontWeight.Light}
              additionalClasses="text-dark-75 h-10 w-[328px] leading-5 text-ellipsis overflow-hidden"
            >
              {content}
            </Typography>
          </div>
          {/* card footer */}
          <div
            className={`flex flex-1 bg-white-90 rounded-xl px-4 py-3.5 ${isVertical && 'mx-2.5'}`}
          >
            <Avatar
              width={44}
              height={44}
              url={author.attributes.avatarUrl}
              alt="author this post"
            />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-col ml-2.5">
                <Typography
                  tag="h4"
                  textSize={Size.XSM}
                  additionalClasses="text-dark-100"
                >
                  {author.attributes.name}
                </Typography>
                <Typography
                  tag="h5"
                  weight={FontWeight.Light}
                  additionalClasses="text-dark-75 text-p leading-5"
                >
                  {information}
                </Typography>
              </div>
              <SaveTag color="#999598" />
            </div>
          </div>
        </div>
        {/* card image */}
      </div>
    </Link>
  );
}
