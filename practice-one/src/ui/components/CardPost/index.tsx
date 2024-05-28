import Image, { StaticImageData } from "next/image";
import { Typography } from "@/ui/components";

// types
import { FontWeight, Size } from "@/types";

interface IProps {
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  alt: string;
}

export const CardPost = ({ title, content, imageSrc, alt }: IProps) => (
  <div className="flex">
    <Image
      className="rounded-xl"
      width={87}
      height={87}
      src={imageSrc}
      alt={alt}
      style={{
        height: "87px",
      }}
    />
    <div className="flex flex-col gap-1.5 ml-2.5 my-3">
      <Typography
       tag="p"
       textSize={Size.XS}
       additionalClasses="text-dark-100"
      >
        { title }
      </Typography>
      <Typography
        tag="p"
        weight={FontWeight.Light}
        additionalClasses="text-dark-75 text-p"
      >
        { content }
      </Typography>
    </div>
  </div>
);