import Image, { StaticImageData } from "next/image";

interface IProps {
    url: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
  }
  
  export const Avatar = ({ url, alt, width, height }: IProps) => (
   <Image
    src={url}
    alt={alt}
    width={width}
    height={height}
    className="rounded-xl"
   />
  );
  