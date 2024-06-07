import Image, { StaticImageData } from 'next/image';

interface IProps {
  url: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const Avatar = ({ url, alt, width, height }: IProps) => (
  <div style={{width: `${width}px`, height: `${height}px`, position: 'relative'}}>
  <Image
    className='rounded-xl'
    alt={alt}
    src={url}
    fill
    objectFit='cover'
  />
</div>

);
