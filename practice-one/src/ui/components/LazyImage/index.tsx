// types
import { CSSProperties } from 'react';

// components
import Image, { StaticImageData } from 'next/image';

// utils
import generateRGBDataURL from '@/utils/color';

interface IProps {
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  objectFit?: string;
  style?: CSSProperties;
  additionalClasses?: string;
  src: string | StaticImageData;
}

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  sizes='',
  style = {},
  fill = false,
  objectFit = '',
  priority = false,
  additionalClasses = '',
}: IProps) => (
  <Image
    src={src}
    alt={alt}
    fill={fill}
    sizes={sizes}
    width={width}
    style={style}
    height={height}
    placeholder="blur"
    priority={priority}
    objectFit={objectFit}
    className={additionalClasses}
    blurDataURL={generateRGBDataURL(64, 64, 64)}
  />
);
