'use client';

import { useEffect, useRef, useState } from 'react';

// components
import { SubMenu } from '@/ui/components/common';

// icons
import { ArrowBottom, ArrowTop } from '@/ui/components/Icons';

// types
import { IMenu } from '@/types';

interface IProps {
  name: string;
  listMenu?: IMenu[];
}

export const Menu = ({ name, listMenu }: IProps) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleSubMenu = () => setIsOpenSubMenu(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenSubMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div
        data-testid="menu-item"
        className="flex items-center relative hover:cursor-pointer"
        onClick={handleToggleSubMenu}
      >
        <p className="text-sm font-medium text-dark-100 hover:text-primary-100 mr-2">
          {name}
        </p>
        {listMenu && isOpenSubMenu ? <ArrowTop /> : <ArrowBottom />}
      </div>

      {listMenu && isOpenSubMenu && (
        <div className="absolute z-10">
          <SubMenu listItem={listMenu} onClick={handleToggleSubMenu} />
        </div>
      )}
    </div>
  );
};
