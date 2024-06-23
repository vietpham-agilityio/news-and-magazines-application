'use client';

import { useState } from 'react';

// components
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@/ui/components';

// icons
import { ArrowLeft, ArrowRight } from '@/ui/components/Icons';

// types
import { Size } from '@/types';

export interface IProps {
  pageCount: number;
  categoryId: number;
}

export const Pagination = ({ pageCount, categoryId }: IProps) => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState<number>(1);

  const handlePrevious = () => {
    const newPageIndex = pageIndex - 1;
    setPageIndex(newPageIndex);
    router.push(`/category/${categoryId}/?page=${newPageIndex}`);
  };

  const handleNext = () => {
    const newPageIndex = pageIndex + 1;
    setPageIndex(newPageIndex);
    router.push(`/category/${categoryId}/?page=${newPageIndex}`);
  };

  const handlePagination = (pageIndex: number) => {
    setPageIndex(pageIndex);
  };

  return (
    <div className="h-10 mt-10 mb-30 sm:mt-11 sm:mb-12 lg:mb-25 flex items-center">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:mx-0 sm:px-6">
        <div className="flex sm:flex-1 sm:items-center sm:justify-between">
          <div className="w-90">
            <nav className="flex gap-1" aria-label="Pagination">
              {pageIndex !== 1 && (
                <Button
                  dataTestId="previous-pagination-button"
                  isMarginBottom
                  label="Previous"
                  textColor="text-dark-75"
                  bgColor="bg-white-90"
                  leftIcon={<ArrowLeft color="#404040" />}
                  onClick={handlePrevious}
                />
              )}
              {[...Array(pageCount)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <Link
                    key={pageNumber}
                    href={`/category/${categoryId}/?page=${pageNumber}`}
                    data-testid={`pagination-button-${pageNumber}`}
                    aria-label={`pagination-button-${pageNumber}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white-90 ${
                      pageIndex === pageNumber && 'bg-white-90'
                    }`}
                    onClick={() => handlePagination(pageNumber)}
                  >
                    <Typography
                      tag="h2"
                      textSize={Size.SM}
                      additionalClasses="text-dark-100"
                    >
                      {pageNumber}
                    </Typography>
                  </Link>
                );
              })}
              {pageIndex !== pageCount && (
                <Button
                  dataTestId="next-pagination-button"
                  isMarginBottom
                  label="Next"
                  textColor="text-dark-75"
                  bgColor="bg-white-90"
                  rightIcon={<ArrowRight color="#404040" />}
                  onClick={handleNext}
                />
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
