
import React from 'react';

interface IProps {
  count: number;
}

export const CardPostSkeleton = ({ count }: IProps) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div key={i} className="animate-pulse mr-4">
        <div className="bg-gray-300 h-46.5 w-90 mb-14 rounded-md" />
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-6 bg-gray-300 rounded w-3/2 mb-2" />
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-6 bg-gray-300 rounded w-3/2 mb-2" />
      </div>
    );
  }

  return (
  <div className="h-101 flex overflow-hidden">
    { skeletons }
  </div>
  )
};
