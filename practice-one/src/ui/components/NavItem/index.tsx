import { memo } from "react";

// icons
import { ArrowBottom } from "../Icons";

interface IMenu {
  name: string;
  path: string;
}

interface IProps {
  name: string;
  url?: string;
  listMenu?: IMenu[];
}

export const NavItem = memo(({ name, url, listMenu }: IProps) => (
  <a href={url || ""} className="flex items-center">
    <p
      className={`text-sm font-medium text-dark-100 hover:text-primary-100 ${listMenu && "mr-2"} `}
    >
      { name }
    </p>
    { listMenu && <ArrowBottom /> }
  </a>
));

NavItem.displayName = "NavItem";
