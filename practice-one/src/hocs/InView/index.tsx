"use client"

import { InView } from "react-intersection-observer"

export default function ComponentInView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ ref, inView }) => (
        <div ref={ref} className="w-full">
          { inView && children }
        </div>
      )}
    </InView>
  )
};
