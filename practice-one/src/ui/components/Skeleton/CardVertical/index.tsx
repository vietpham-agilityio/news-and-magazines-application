export const CardVerticalSkeleton = () => (
  <div className="col-span-12 2xl:col-span-6 w-full 2xl:w-186">
    <div className="animate-pulse flex flex-col sm:flex-row">
      <div className="bg-gray-300 h-50 w-72 rounded-md mb-4 sm:mb-0" />
      <div className="flex flex-col justify-end flex-1 sm:ml-10">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-8 bg-gray-300 rounded w-3/2 mb-2" />
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-8 bg-gray-300 rounded w-3/2 mb-2" />
      </div>
    </div>
  </div>
);
