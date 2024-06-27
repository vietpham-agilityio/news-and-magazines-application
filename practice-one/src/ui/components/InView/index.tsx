'use client';

import { InView } from 'react-intersection-observer';

interface IProps {
  children: React.ReactNode;
}

const InViewWrapper = ({ children }: IProps) => {
  return (
    <InView triggerOnce threshold={1}>
      {({ ref, inView }) => (
        <div ref={ref} className="w-full">
          {inView && children}
        </div>
      )}
    </InView>
  );
};

export default InViewWrapper;
