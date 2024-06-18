import { Suspense } from 'react';
import type { Metadata } from 'next';

// components
import {
  Title,
  Comment,
  BreadCrumbs,
  CommentForm,
  DetailPostSkeleton,
  CardPostSkeleton,
} from '@/ui/components';
import { PostDetail, PostsByAttribute, RightSidebar } from '@/ui/features';

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
  const postResponse = await getPostDataById(id);

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
      <BreadCrumbs listBreadCrumb={listBreadCrumb} />

      <div className="flex flex-col lg:flex-row">
        <Suspense fallback={<DetailPostSkeleton />}>
          <PostDetail postId={id} />
        </Suspense>
        <RightSidebar />
      </div>
      <section className="2xl:max-w-[1128px] mt-10 sm:mt-12 lg:mt-17.5">
        {/* comment */}
        <Title title="Comment" />
        <div className="flex flex-col gap-9 mt-7.5 mb-10 sm:mb-12 lg:mb-15">
          <Comment
            userName="Bonggo"
            content="An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys."
            publicDate="2022 04 July"
          />

          <Comment
            userName="Bonggo"
            content="An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys."
            publicDate="2022 04 July"
          />

          <Comment
            userName="Bonggo"
            content="An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys."
            publicDate="2022 04 July"
          />
        </div>

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
