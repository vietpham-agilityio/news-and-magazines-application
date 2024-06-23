import React from 'react';

interface IProps {
  count: number;
}

export const CardCategorySkeleton = ({ count }: IProps) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div
        key={i}
        className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3 animate-pulse"
      >
        <div className="flex flex-col w-90 sm:flex-row sm:w-151 md:w-166 lg:flex-col lg:w-90 mx-auto">
          <div className="bg-gray-300 h-46.5 w-full sm:w-47.5 lg:w-90 mb-14 rounded-md" />
          <div className="flex flex-col flex-1 justify-center sm:ml-10 lg:ml-0">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-6 bg-gray-300 rounded w-3/2 mb-2" />
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-6 bg-gray-300 rounded w-3/2 mb-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-5 sm:gap-6">
      {skeletons}
      <div className="h-10 mt-10 mb-30 sm:mt-11 sm:mb-12 lg:mb-25" />
    </div>
  );
};
