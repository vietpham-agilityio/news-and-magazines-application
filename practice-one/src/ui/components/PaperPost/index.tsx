import { StaticImageData } from 'next/image';
import { LazyImage, Typography } from '@/ui/components';

// types
import { FontWeight, Size } from '@/types';
import Link from 'next/link';

interface IProps {
  id: number;
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
  isLargePaper?: boolean;
}

export const PaperPost = ({
  id,
  title,
  content,
  imageSrc,
  alt,
  isLargePaper,
}: IProps) => {
  const titleSize = isLargePaper ? Size.SM : Size.XS;
  const contentSize = isLargePaper ? 'text-xsm' : 'text-p';
  const imageWidth = isLargePaper ? '190px' : '87px';
  const imageHeight = isLargePaper ? '190px' : '87px';

  return (
    <Link href={`/articles/${id}`}>
      <div
        className={`flex cursor-pointer ${isLargePaper && 'bg-white-100 h-52.5 w-full p-2.5 rounded-xl'}`}
      >
        <div
          style={{ width: imageWidth, height: imageHeight, position: 'relative' }}
        >
          <LazyImage
            fill
            objectFit="cover"
            additionalClasses="rounded-xl"
            src={imageSrc}
            alt={alt}
            sizes={`${isLargePaper ? '190px' : '87px'}`}
          />
        </div>
        <div
          className={`flex flex-col gap-1.5 ml-2.5 flex-1 ${isLargePaper ? 'py-4' : ' my-3'}`}
        >
          <Typography
            tag="h2"
            textSize={titleSize}
            additionalClasses={`w-[223px] text-dark-100 text-ellipsis  ${isLargePaper && 'h-7 px-1.5 w-auto'}`}
          >
            {title}
          </Typography>
          <Typography
            tag="h3"
            weight={FontWeight.Light}
            additionalClasses={`
            h-8 w-[223px] text-dark-75 text-wrap truncate text-ellipsis overflow-hidden
            ${contentSize}
            ${isLargePaper && 'px-1.5 h-auto w-auto'}`}
          >
            {content}
          </Typography>
        </div>
      </div>
    </Link>
  );
};
