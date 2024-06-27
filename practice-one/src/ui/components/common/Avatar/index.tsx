import { StaticImageData } from 'next/image';
import { LazyImage } from '@/ui/components/LazyImage';

interface IProps {
  url: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const Avatar = ({ url, alt, width, height }: IProps) => (
  <div style={{width: `${width}px`, height: `${height}px`, position: 'relative'}}>
  <LazyImage
    additionalClasses='rounded-xl'
    alt={alt}
    src={url}
    fill
    sizes={`${width}px`}
    objectFit='cover'
  />
</div>

);
