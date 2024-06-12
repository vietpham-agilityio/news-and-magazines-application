import Link from 'next/link';
import { Suspense } from 'react';

// componens
import {
  Title,
  Typography,
  DetailPostSkeleton,
  CardPostSkeleton,
} from '@/ui/components';
import { PostDetail, PostsByAttribute, RightSidebar } from '@/ui/features';

// services
import { getPostDataById } from '@/services';

// types
import { CardType, FontWeight, PostVariant, Size } from '@/types';

// icons
import { ArrowRight } from '@/ui/components/Icons';

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const postResponse = await getPostDataById(id);

  const { title } = postResponse.data.attributes;

  return (
    <main className="container mx-auto">
      <div className="flex items-center my-11">
        <Link href="/">
          <Typography
            tag="h2"
            textSize={Size.XS}
            weight={FontWeight.Normal}
            additionalClasses="text-dark-100 hover:text-primary-100"
          >
            Home
          </Typography>
        </Link>
        <i className="mx-2">
          <ArrowRight />
        </i>
        <Typography
          tag="h2"
          textSize={Size.XS}
          weight={FontWeight.Normal}
          additionalClasses="text-dark-100"
        >
          Article
        </Typography>
        <i className="mx-2">
          <ArrowRight />
        </i>
        <Typography
          tag="h2"
          textSize={Size.XS}
          weight={FontWeight.Normal}
          additionalClasses="text-dark-90 h-5 truncate text-ellipsis overflow-hidden"
        >
          {title}
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row mb-12">
        <Suspense fallback={<DetailPostSkeleton />}>
          <PostDetail postId={id} />
        </Suspense>
        <RightSidebar />
      </div>

      <section className="container flex flex-col justify-between bg-white-100 h-459 mt-17.5 mb-25">
        <Title title="Popular Posts" />
        <Suspense fallback={<CardPostSkeleton count={4} />}>
          <PostsByAttribute
            attribute={PostVariant.POPULAR}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>
    </main>
  );
}
