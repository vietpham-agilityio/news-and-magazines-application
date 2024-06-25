// static image
import ImageStore from '@/constants/images';

// componens
import Image from 'next/image';
import { Button } from '@/ui/components';
import { TagGroup, SidebarCard, AuthorInformation } from '@/ui/features';

// mocks
import { listTagItems } from '@/mocks';

// icons
import { ChatBox, PaperPlane, SaveTagSmall } from '@/ui/components/Icons';

const RightSidebar = ({ postId }: { postId: string }) => (
  <aside className="bg-white-100 lg:ml-[23px] lg:w-90">
    {/* tag and author */}
    <div className="flex flex-col-reverse sm:gap-5 sm:flex-row lg:flex-col lg:gap-0">
      <div className="flex flex-col sm:w-87.5 lg:w-90">
        <div className="flex justify-between bg-white-100 mb-[25px]">
          <Button
            isMarginBottom
            label="Share"
            textColor="text-dark-75"
            bgColor="bg-white-90"
            leftIcon={<PaperPlane color="#404040" />}
          />

          <Button
            isMarginBottom
            label="Marking"
            textColor="text-dark-75"
            bgColor="bg-white-90"
            leftIcon={<SaveTagSmall color="#404040" />}
          />
          <Button
            isMarginBottom
            label="Comment"
            textColor="text-dark-75"
            bgColor="bg-white-90"
            leftIcon={<ChatBox color="#404040" />}
          />
        </div>
        <AuthorInformation postId={postId} />
      </div>
      <div className="flex-1 mb-[25px]">
        <TagGroup listTags={listTagItems} />
      </div>
    </div>
    <div className="mb-[25px] hidden lg:block">
      <SidebarCard />
    </div>
    <div className="flex justify-between gap-5 lg:flex-col">
      <div className="mx-auto sm:mx-0">
        <Image
          width={360}
          height={180}
          src={ImageStore.AdvertisingTwo}
          alt="Advertising"
        />
      </div>
      <div className="hidden sm:block">
        <Image
          width={360}
          height={180}
          src={ImageStore.AdvertisingOne}
          alt="Advertising"
        />
      </div>
    </div>
  </aside>
);

export default RightSidebar;