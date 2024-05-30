// asset
import AdvertisingOne from "@/images/advertising/advertising-one.png";
import AdvertisingTwo from "@/images/advertising/advertising-two.png";
import AvatarAuthor from "@/images/avatar/avatar-author.jpg";

// componens
import Image from "next/image";
import { Avatar, Button, Information } from "@/ui/components";
import { SidebarCard, TagGroup } from "@/ui/features";

// icons
import { ChatBox, PaperPlane, Plus, SaveTagSmall } from "@/ui/components/Icons";

export const RightSidebar = () => (
  <aside className="bg-white-100 lg:ml-[23px] lg:w-[360px]">
    {/* tag and author */}
    <div className="flex flex-col-reverse sm:gap-5 sm:flex-row lg:flex-col lg:gap-0">
      <div className="flex flex-col w-full">
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
        <div className="bg-white-90 flex p-[15px] mb-[25px] rounded-xl">
          <Avatar
            width={87}
            height={87}
            url={AvatarAuthor}
            alt="Avatar author"
          />
          <div className="flex-1 ml-2.5 mt-3.5">
            <Information name="Louis Hoebregts" information="27 posts" />
            <div className="mt-2">
              <Button
                label="Follow"
                leftIcon={<Plus />}
                bgColor="bg-primary-90"
                textColor="text-white-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-[25px]">
        <TagGroup />
      </div>
    </div>
    <div className="mb-[25px] hidden lg:block">
      <SidebarCard />
    </div>
    <div className="flex justify-between gap-5 lg:flex-col">
      <div className="">
        <Image
          width={360}
          height={180}
          src={AdvertisingTwo}
          alt="Advertising"
        />
      </div>
      <div className="hidden sm:block">
        <Image
          width={360}
          height={180}
          src={AdvertisingOne}
          alt="Advertising"
        />
      </div>
    </div>
  </aside>
);
