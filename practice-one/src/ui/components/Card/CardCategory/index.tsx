// components
import Link from 'next/link';
import { Avatar, LazyImage, Typography } from '@/ui/components';
import { SaveTag } from '@/ui/components/Icons';

// types
import { FontWeight, Size } from '@/types';

// services
import { getAuthorById, getPostDataById } from '@/services';

interface IProps {
  id: string;
}

const CardCategory = async ({ id }: IProps) => {
  const postResponse = await getPostDataById(id);

  const { title, content, authorId, imageUrl, publicationDate } =
    postResponse.data.attributes;

  const { data: author } = await getAuthorById(authorId);
  const isVertical = true;

  return (
    <Link href={`/articles/${id}`}>
      <div className="mx-auto bg-white-100 flex flex-col items-center justify-center p-2.5 shadow-custom rounded-xl hover:cursor-pointer hover:opacity-90 w-89.5 h-[385px] sm:w-full max-w-186 sm:h-full sm:flex-row sm:gap-2.5 lg:flex-col lg:w-90 lg:h-[389px]">
        <div className="relative w-84.5 h-46.5 sm:w-47.5 lg:w-85 lg:h-47.5">
          <LazyImage
            additionalClasses="rounded-xl"
            fill
            src={imageUrl}
            alt={title}
            objectFit="cover"
            sizes="(max-width: 603px) 338px,
            (min-width: 604px) and (max-width: 1023px) 190px,
            (min-width: 1024px) 340px"
          />
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
              additionalClasses="text-dark-75 h-10 w-82 leading-5 text-ellipsis overflow-hidden"
            >
              {content}
            </Typography>
          </div>
          {/* card footer */}
          <div className="flex flex-1 bg-white-90 rounded-xl px-4 py-3.5 mx-2.5">
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
                  {publicationDate}
                </Typography>
              </div>
              <SaveTag color="#999598" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory;
