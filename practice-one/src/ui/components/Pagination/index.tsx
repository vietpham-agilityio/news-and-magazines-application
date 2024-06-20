'use client';

import { useState } from 'react';

// components
import Link from 'next/link';
import { Button, Typography } from '@/ui/components';

// icons
import { ArrowLeft, ArrowRight } from '@/ui/components/Icons';

// types
import { PaginationPage, Size } from '@/types';

export interface IProps {
  pageCount: number;
  categoryId: number;
}

export const Pagination = ({ pageCount, categoryId }: IProps) => {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const handlePrevious = () => setPageIndex(prev => prev - 1);
  const handleNext = () => setPageIndex(prev => prev + 1);

  const handlePagination = (pageIndex: number) => setPageIndex(pageIndex);

  const paginationButtons = [];

  for (let i = 1; i <= pageCount; i++) {
    paginationButtons.push(
      <Link
        key={i}
        href={`/category/${categoryId}/?page=${pageIndex}`}
        data-testid={`pagination-button-${i}`}
        aria-label={`pagination-button-${i}`}
        className={`w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white-90 ${
          pageIndex === i && 'bg-white-90'
        }`}
      >
        <Typography
          tag="h2"
          textSize={Size.SM}
          additionalClasses="text-dark-100"
        >
          {i}
        </Typography>
      </Link>
    );
  }

  return (
    <div className="h-10 mt-10 mb-30 sm:mt-11 sm:mb-12 lg:mb-25 flex items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
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
              { paginationButtons }
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
