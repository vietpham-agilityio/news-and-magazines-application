import { ReactNode } from "react";

// types
import { Size, FontWeight } from "@/types";

interface IProps {
  textSize?: Size;
  weight?: FontWeight;
  children: ReactNode;
  additionalClasses?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export const Typography = ({
  tag,
  textSize = Size.MD,
  weight = FontWeight.Medium,
  additionalClasses = "",
  children,
}: IProps) => {
  const SemanticTag = tag;

  return (
    <SemanticTag
      className={`text-${textSize} font-${weight} ${additionalClasses}`}
    >
      {children}
    </SemanticTag>
  );
};
