"use client";

import { useState } from "react";

// components
import { SubMenu } from "@/ui/components/common";

// icons
import { ArrowBottom, ArrowTop } from "@/ui/components/Icons";

// types
import { IMenu } from "@/types";

interface IProps {
  name: string;
  listMenu?: IMenu[];
}

export const Menu = ({ name, listMenu }: IProps) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  const handleToggleSubMenu = () => setIsOpenSubMenu((prev) => !prev);

  return (
    <>
      <div className="flex items-center relative hover:cursor-pointer" onClick={handleToggleSubMenu}>
        <p
          className={`text-sm font-medium text-dark-100 hover:text-primary-100 ${listMenu && "mr-2"} `}
        >
          { name }
        </p>
        {listMenu && isOpenSubMenu ? <ArrowTop /> : <ArrowBottom />}
      </div>

      {listMenu && isOpenSubMenu && (
        <div className="absolute z-10">
          <SubMenu listItem={listMenu} onClick={handleToggleSubMenu} />
        </div>
      )}
    </>
  );
};
