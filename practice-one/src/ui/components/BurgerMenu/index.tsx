'use client';

import { useState, useCallback } from 'react';

// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listCategories } from '@/mocks';

// components
import { BoxIcon, Brand, NavItem, Typography } from '@/ui/components';
import Link from 'next/link';

// icons
import {
  ArrowBottom,
  ArrowRight,
  Close,
  BurgerMenu as BurgerMenuIcon,
} from '@/ui/components/Icons';

// types
import { FontWeight, IMenu, Size } from '@/types';
import { createPortal } from 'react-dom';

interface IProps {
  listNav: IMenu[];
}

export const BurgerMenu = ({ listNav }: IProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  const classNavItem = `w-full h-12 pl-2 rounded-xl hover:bg-white-90 ${flexItemCenter}`;

  const handleToggleMenu = useCallback(() => setIsOpenMenu(prev => !prev), []);
  const handleCloseMenu = useCallback(() => setIsOpenMenu(false), []);
  const handleCloseSubMenu = useCallback(() => setIsOpenSubMenu(false), []);

  const handleToggleSubMenu = useCallback(
    () => setIsOpenSubMenu(prev => !prev),
    []
  );

  const handleCloseAllMenu = useCallback(
    () => (handleCloseMenu(), handleCloseSubMenu()),
    [handleCloseMenu, handleCloseSubMenu]
  );

  return (
    <div>
      <BoxIcon
        icon={<BurgerMenuIcon />}
        onClick={handleToggleMenu}
        additionalClasses="w-12"
      />
      {isOpenMenu &&
        createPortal(
          <div className="w-full h-full z-10 absolute px-5 pb-4 pt-6 left-0 top-0 bg-white-100 shadow-xl">
            <div className="flex relative">
              <Brand brandName="MEGA.news" url="/" />
              <div className="absolute -right-2 -top-2">
                <BoxIcon
                  icon={<Close />}
                  onClick={handleCloseMenu}
                  additionalClasses="w-12"
                />
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-4 h-12 pl-2 pr-3 rounded-xl hover:bg-white-90"
              onClick={handleToggleSubMenu}
            >
              <div className={`${flexItemCenter}`}>
                {isOpenSubMenu && (
                  <div className="w-1 h-[11px] bg-primary-100 rounded-2xl mr-2" />
                )}
                <Typography
                  tag="p"
                  textSize={Size.SM}
                  weight={FontWeight.Medium}
                  additionalClasses="text-dark-100 hover:text-primary-100"
                >
                  Categories
                </Typography>
              </div>
              {isOpenSubMenu ? <ArrowBottom /> : <ArrowRight />}
            </div>

            {isOpenSubMenu && (
              <ul className="list-none mt-1.5 pl-5">
                {listCategories.map(item => (
                  <li
                    key={item.key}
                    className="mb-2 last:mb-0"
                    onClick={handleCloseAllMenu}
                  >
                    <Link href={item.path}>
                      <Typography
                        tag="p"
                        textSize={Size.XS}
                        additionalClasses="text-dark-75 cursor-pointer hover:text-secondary-100"
                      >
                        { item.name }
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div>
              {listNav.map(navItem => (
                <div key={navItem.key} className={classNavItem}>
                  <NavItem name={navItem.name} url={navItem.path} />
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
