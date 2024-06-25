export const CommentSkeleton = () => (
  <div className="my-4">
    <div className="animate-pulse">
      <div className="bg-gray-300 h-15 w-30 rounded-md mb-4 sm:mb-3.5" />
      <div className="flex gap-4 w-1/3">
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
      </div>
      <div className="flex gap-4 w-1/2">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
      </div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
    </div>
  </div>
);
