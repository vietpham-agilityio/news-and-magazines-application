// componens
import { RightSidebar } from '@/ui/features';
import { TitleSection } from '@/ui/components';
import PostDetail from '@/ui/features/PostDetail';

// services
import { CardType, PostVariant } from '@/types';
import PostsByAttribute from '@/ui/features/PostsByAttribute';

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {

  return (
    <main className="container mx-auto">
      <p className="text-p font-normal my-11">Home</p>
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
