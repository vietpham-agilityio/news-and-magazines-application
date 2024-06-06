import Image, { StaticImageData } from 'next/image';
import { Typography } from '@/ui/components';

// types
import { FontWeight, Size } from '@/types';

interface IProps {
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
  isLargePaper?: boolean;
}

export const PaperPost = ({
  title,
  content,
  imageSrc,
  alt,
  isLargePaper,
}: IProps) => {
  const titleSize = isLargePaper ? Size.SM : Size.XS;
  const contentSize = isLargePaper ? 'text-xsm' : 'text-p';

  return (
    <div
      className={`flex ${isLargePaper && 'bg-white-100 h-[210px] w-full p-2.5 rounded-xl'}`}
    >
      <Image
        className="rounded-xl"
        width={87}
        height={87}
        src={imageSrc}
        alt={alt}
        style={{
          width: isLargePaper ? '190px' : '87px',
          height: isLargePaper ? '190px' : '87px',
        }}
      />
      <div
        className={`flex flex-col gap-1.5 ml-2.5 ${isLargePaper ? 'py-4 flex-1' : ' my-3'}`}
      >
        <Typography
          tag="h2"
          textSize={titleSize}
          additionalClasses={`text-dark-100 text-ellipsis overflow-hidden ${isLargePaper && 'h-7 px-1.5'}`}
        >
          {title}
        </Typography>
        <Typography
          tag="h3"
          weight={FontWeight.Light}
          additionalClasses={`
          text-dark-75 text-ellipsis overflow-hidden
           ${contentSize}
           ${isLargePaper && 'px-1.5'}`}
        >
          {content}
        </Typography>
      </div>
    </div>
  );
};
