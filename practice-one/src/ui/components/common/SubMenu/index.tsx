import { ReactNode } from "react";

// constants
import { flexCenter } from "@/constants";

// components
import { Typography } from "@/ui/components";

// types
import { Size } from "@/types";

interface Item {
  key: string;
  content: string;
}

interface IProps {
  listItem: Item[];
}

export const SubMenu = ({ listItem = [] }: IProps) => (
  <div className={`${flexCenter} py-5 px-9 w-[360px] bg-white-90`}>
    <ul className="list-none w-full grid grid-cols-2 grid-rows-5">
      {listItem.map((item) => (
        <li key={item.key} className="mb-2 last:mb-0">
          <Typography
            tag="p"
            textSize={Size.XS}
            additionalClasses="text-dark-75 hover:text-secondary-100 cursor-pointer"
          >
            {item.content}
          </Typography>
        </li>
      ))}
    </ul>
  </div>
);
