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

  const ariaLevel = 
  tag === "h1" ? 1 : 
  tag === "h2" ? 2 : 
  tag === "h3" ? 3 : 
  tag === "h4" ? 4 : 
  tag === "h5" ? 5 : 
  tag === "h6" ? 6 : 7;

  return (
    <SemanticTag
      aria-level={ariaLevel}
      className={`text-${textSize} font-${weight} ${additionalClasses}`} role="heading"
    >
      { children }
    </SemanticTag>
  );
};
