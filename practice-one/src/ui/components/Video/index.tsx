import Image, { StaticImageData } from 'next/image';
import { Typography } from '@/ui/components';

// types
import { FontWeight, Size } from '@/types';
import { Triangle } from '../Icons';

interface IProps {
  title: string;
  content: string;
  videoSrc: string | StaticImageData;
}

export const Video = ({ title, content, videoSrc }: IProps) => (
  <div className="h-full w-full relative rounded-xl flex justify-center bg-transparent p-2.5 hover:cursor-pointer">
    <Image
      className="rounded-xl absolute"
      src={videoSrc} // will replace image component with video
      alt="panel of video"
      fill
    />
    {/* card body */}
    <div className="hidden sm:block absolute left-2 xl:left-2.5 bottom-4 p-4 w-[97%] bg-white-75 rounded-xl opacity-90">
      <Typography
        tag="h2"
        textSize={Size.MD}
        weight={FontWeight.Medium}
        additionalClasses="text-black-100"
      >
        {title}
      </Typography>
      <Typography
        tag="h3"
        textSize={Size.XSM}
        weight={FontWeight.Light}
        additionalClasses="text-dark-100 h-10 w-full pr-10 leading-5 text-ellipsis overflow-hidden "
      >
        {content}
      </Typography>
    </div>
    <div className="absolute flex items-center justify-center w-30 h-30 mt-32 sm:mt-24 bg-white-90 opacity-85 rounded-full hover:cursor-pointer">
      <div className="ml-1">
        <Triangle />
      </div>
    </div>
  </div>
);
