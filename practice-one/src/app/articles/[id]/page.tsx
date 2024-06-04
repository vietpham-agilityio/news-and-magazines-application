// componens
import { RightSidebar } from '@/ui/features';
import { TitleSection, Typography } from '@/ui/components';
import PostDetail from '@/ui/features/PostDetail';

// services
import { CardType, FontWeight, PostVariant, Size } from '@/types';
import PostsByAttribute from '@/ui/features/PostsByAttribute';
import { ArrowRight } from '@/ui/components/Icons';
import { getPostDataById } from '@/services';
import Link from 'next/link';

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const postResponse = await getPostDataById(id);

  const { title } = postResponse.data.attributes;

  return (
    <main className="container mx-auto">
      {/* Path */}
      <div className="flex items-center my-11">
        <Link href="/">
          <Typography
            tag="p"
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
        <Link href="/article">
          <Typography
            tag="p"
            textSize={Size.XS}
            weight={FontWeight.Normal}
            additionalClasses="text-dark-100 hover:text-primary-100"
          >
            Article
          </Typography>
        </Link>
        <i className="mx-2">
          <ArrowRight />
        </i>
        <Typography
          tag="p"
          textSize={Size.XS}
          weight={FontWeight.Normal}
          additionalClasses="text-dark-50 h-5 text-ellipsis overflow-hidden"
        >
          { title }
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row mb-12">
        <PostDetail postId={id} />
        <RightSidebar />
      </div>

      <section className="container flex flex-col justify-between bg-white-100 h-459 mt-17.5 mb-25">
        <TitleSection title="Popular Posts" />
        <PostsByAttribute
          attribute={PostVariant.POPULAR}
          cardType={CardType.VERTICAL}
        />
      </section>
    </main>
  );
}
