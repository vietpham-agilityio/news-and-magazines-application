import { memo } from "react";

// constants
import { flexCenter } from "@/constants";

// components
import Link from "next/link";
import { Typography } from "@/ui/components";

// types
import { Size, IMenu } from "@/types";

interface IProps {
  listItem: IMenu[];
  onClick: () => void;
}

export const SubMenu = memo(({ listItem, onClick }: IProps) => (
  <div className={`${flexCenter} py-5 px-4 w-90 bg-white-100 rounded-xl shadow-xl`}>
    <ul className="list-none w-full grid grid-cols-2 grid-rows-5">
      {listItem.map((item) => (
        <li key={item.key} className="mb-2 last:mb-0" onClick={onClick}>
          <Link href={item.path}>
            <Typography
              tag="p"
              textSize={Size.XS}
              additionalClasses="text-dark-75 hover:text-secondary-100 cursor-pointer"
            >
              { item.name }
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

SubMenu.displayName = "SubMenu";
