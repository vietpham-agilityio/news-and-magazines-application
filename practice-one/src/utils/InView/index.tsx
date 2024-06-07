"use client"

import { CardPostSkeleton } from "@/ui/components"
import { InView } from "react-intersection-observer"

export default function ComponentInView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ ref, inView }) => (
        <div ref={ref}>
          { inView && children }
        </div>
      )}
    </InView>
  )
};
