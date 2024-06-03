// componens
import Image from 'next/image';
import { RightSidebar } from '@/ui/features';
import { TitleSection, Typography } from '@/ui/components';

// services
import { getPostDataById } from '@/services';
import { CardType, FontWeight, PostVariant, Size } from '@/types';
import PostsByAttribute from '@/ui/features/PostsByAttribute';

export default async function Page({
  params: { id },
}: {
  params: { id: number };
})
 {
  const postResponse = await getPostDataById(id);

  const { title, content, imageUrl  } = postResponse.data.attributes;

  return (
    <main className="container mx-auto">
      <p className="text-p font-normal my-11">Home</p>
      <section className="flex flex-col lg:flex-row mb-12">
        {/* article */}
        <article className="flex-1 mb-17.5">
          <div className="mb-7.5 lg:bg-white-90 lg:p-7 xl:mb-[130px] xl:h-[604px] rounded-xl">
            <Typography
              tag="h1"
              additionalClasses="text-md font-medium sm:text-xxl sm:font-normal mb-7"
            >
              { title }
            </Typography>
            <Image
              className="mx-auto rounded-xl w-[358px] h-[198px] sm:w-full sm:h-[336px] lg:h-[460px] xl:w-full xl:h-[538px] 2xl:h-[598px] 2xl:w-[1072px]"
              src={imageUrl}
              alt={title}
              width={1072}
              height={598}
            />
          </div>
          <div className="w-[291px] sm:w-[516px] h-5 bg-slate-600 mx-auto mb-12">
            <p>Tag</p>
          </div>
          <section>
          {content?.split('\n').map((line, index) => (
          <Typography key={index} tag='p' textSize={Size.MD} weight={FontWeight.Normal} additionalClasses='text-dark-100'>
            { line }
          </Typography>
        ))}

          </section>
        </article>
        {/* sidebar */}
        <RightSidebar />
      </section>

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
