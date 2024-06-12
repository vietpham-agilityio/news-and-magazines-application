import { Suspense } from 'react';

// components
import {
  Title,
  BreadCrumbs,
  DetailPostSkeleton,
  CardPostSkeleton,
} from '@/ui/components';
import { PostDetail, PostsByAttribute, RightSidebar } from '@/ui/features';

// services
import { getPostDataById } from '@/services';

// types
import { CardType, IBreadCrumbItem, PostVariant } from '@/types';

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const postResponse = await getPostDataById(id);

  const { title } = postResponse.data.attributes;

  const listBreadCrumb: IBreadCrumbItem[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Articles',
      path: '',
    },
    {
      name: title,
      path: '',
    },
  ];

  return (
    <main className="container mx-auto">
      <BreadCrumbs listBreadCrumb={listBreadCrumb} />

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
