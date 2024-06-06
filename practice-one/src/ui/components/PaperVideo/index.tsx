import Image, { StaticImageData } from 'next/image';
import { Typography } from '@/ui/components';

// types
import { FontWeight, Size } from '@/types';

interface IProps {
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
}

export const PaperVideo = ({ title, content, imageSrc, alt }: IProps) => (
  <div className="flex bg-white-100 h-[210px] w-full p-2.5 rounded-xl">
    <Image
      className="rounded-xl w-[190px] h-[190px]"
      width={190}
      height={190}
      src={imageSrc}
      alt={alt}
    />
    <div className="flex flex-1 flex-col gap-1.5 ml-2.5 py-4">
      <Typography tag="h2" textSize={Size.SM} additionalClasses="h-7 text-dark-100 px-1.5 text-ellipsis overflow-hidden">
        {title}
      </Typography>
      <Typography
        tag="h3"
        weight={FontWeight.Light}
        additionalClasses={`text-dark-75 text-xsm px-1.5 text-ellipsis overflow-hidden`}
      >
        {content}
      </Typography>
    </div>
  </div>
);
