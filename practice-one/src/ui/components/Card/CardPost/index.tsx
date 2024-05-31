import { memo } from "react";

// components
import Image, { StaticImageData } from "next/image";
import { Avatar, Typography } from "@/ui/components";
import { SaveTag } from "@/ui/components/Icons";

// types
import { FontWeight, Size } from "@/types";

// services
import { getAuthorById } from "@/services";


export default memo(async function CardPost({
  id = "card-post",
  title = "How to Drive a Car Safely",
  content = "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. ",
  imageSrc = "https://images.unsplash.com/photo-1716872491847-03c73619a25d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  alt = "This car",
  authorId,
  information = "August 18 , 2022",
  isVertical,
}: {
  id?: string;
  title?: string;
  content?: string;
  imageSrc?: string | StaticImageData;
  alt?: string;
  authorId: string;
  information?: string;
  isVertical?: boolean;
}) {
  const { data: author } = await getAuthorById(authorId);

  return (
    <div
      className={`bg-white-100 flex flex-col items-center justify-center p-2.5 shadow-custom rounded-xl hover:cursor-pointer
      ${
        isVertical
          ? "w-[358px] h-[385px] sm:h-100 lg:h-[389px] sm:w-[370px] lg:w-[360px]"
          : "sm:flex-row lg:h-[210px] lg:w-[744px] gap-2.5"
      }`}
    >
      {/* card image */}
      <Image
        className={`rounded-xl w-84.5 h-46.5 ${isVertical ? "sm:w-87.5 sm:h-50" : "sm:w-[190px] sm:[190px]"} lg:w-85 lg:h-47.5`}
        width={360}
        height={190}
        src={imageSrc}
        alt={alt}
      />
      {/* card body */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-4 p-4">
          <Typography
            tag="h5"
            textSize={Size.SM}
            additionalClasses="text-dark-100"
          >
            {title}
          </Typography>
          <Typography
            tag="p"
            textSize={Size.XSM}
            weight={FontWeight.Light}
            additionalClasses="text-dark-75 h-10 w-[328px] leading-5 text-ellipsis overflow-hidden "
          >
            {content}
          </Typography>
        </div>
        {/* card footer */}
        <div
          className={`flex flex-1 bg-white-90 rounded-xl px-4 py-3.5 ${isVertical && "mx-2.5"}`}
        >
          <Avatar
            width={44}
            height={44}
            url={author.attributes.avatarUrl}
            alt="author this post"
          />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-col ml-2.5">
              <Typography
                tag="p"
                textSize={Size.XSM}
                additionalClasses="text-dark-100"
              >
                {author.attributes.name}
              </Typography>
              <Typography
                tag="p"
                weight={FontWeight.Light}
                additionalClasses="text-dark-75 text-p leading-5"
              >
                {information}
              </Typography>
            </div>
            <SaveTag color="#999598" />
          </div>
        </div>
      </div>
    </div>
  );
});
