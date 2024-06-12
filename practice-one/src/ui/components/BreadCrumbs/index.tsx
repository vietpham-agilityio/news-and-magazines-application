// components
import Link from 'next/link';
import { Typography } from '@/ui/components';

// types
import { FontWeight, IBreadCrumbItem, Size } from '@/types';

// icons
import { ArrowRight } from '@/ui/components/Icons';

interface IProps {
  listBreadCrumb: IBreadCrumbItem[];
}

export const BreadCrumbs = ({ listBreadCrumb }: IProps) => (
  <div className="flex items-center my-11">
    {listBreadCrumb.map((item, index) => {
      const { path, name } = item;

      return (
        <>
          <Link href={path}>
            <Typography
              tag="h2"
              textSize={Size.XS}
              weight={FontWeight.Normal}
              additionalClasses={`
              ${
                index === listBreadCrumb.length - 1
                  ? 'w-57.5 text-dark-90 h-5 truncate text-ellipsis overflow-hidden sm:w-full'
                  : ' text-dark-100 hover:text-primary-100'
              }`}
            >
              { name }
            </Typography>
          </Link>
          {index !== listBreadCrumb.length - 1 && (
            <i className="mx-2">
              <ArrowRight />
            </i>
          )}
        </>
      );
    })}
  </div>
);
