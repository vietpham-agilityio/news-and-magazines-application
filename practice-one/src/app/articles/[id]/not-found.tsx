import { MESSAGE } from '@/constants';

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-[177px] sm:mt-14 lg:mt-52 mb-7.5">
      <h1 className="text-secondary-100 font-medium text-3xl sm:text-7xl">
        {MESSAGE.NOT_FOUND}
      </h1>
      <p className="text-sm text-dark-100 text-center mb-[291px] mt-2 sm:mb-[85px] sm:mt-0 lg:mb-44">
        OOPS! Page you&apos;re looking for doesn&apos;t exist. Please use search
        for help
      </p>
    </div>
  );
};

export default NotFound;
