import { Suspense } from 'react';
import type { Metadata } from 'next';

// components
import {
  Title,
  BreadCrumbs,
  CommentForm,
  DetailPostSkeleton,
  CardPostSkeleton,
  CommentSkeleton,
} from '@/ui/components';
import {
  PostDetail,
  PostsByAttribute,
  RightSidebar,
  CommentGroup,
} from '@/ui/features';

// services
import { getPostDataById } from '@/services';

// types
import { CardType, IBreadCrumbItem, PostVariant } from '@/types';

export const metadata: Metadata = {
  title: 'Article - News & Magazine',
  description:
    'Read in-depth coverage on our latest article. Stay informed with News & Magazine.',
};

export default async function DetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const postResponse = await getPostDataById(id.toString());

  const { title = 'Title is not available' } = postResponse.data.attributes;

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
    <main className="mx-2 sm:mx-6 lg:container lg:mx-auto">
      <div className="my-11">
        <BreadCrumbs listBreadCrumb={listBreadCrumb} />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Suspense fallback={<DetailPostSkeleton />}>
          <PostDetail postId={id.toString()} />
        </Suspense>
        <RightSidebar />
      </div>
      <section className="2xl:max-w-[1128px] mt-10 sm:mt-12 lg:mt-17.5">
        {/* comment */}
        <Title title="Comment" />
        <Suspense fallback={<CommentSkeleton />}>
          <CommentGroup postId={id.toString()} />
        </Suspense>
        {/* comment form */}
        <div className="mb-7.5">
          <Title title="Add A Comment" />
        </div>
        <CommentForm />
      </section>

      <section className="w-full lg:container flex flex-col justify-between bg-white-100 h-459 mt-10 lg:mt-20 mb-25">
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
