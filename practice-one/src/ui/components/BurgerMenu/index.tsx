'use client';

import { useState, useEffect } from 'react';

// constants
import { flexItemCenter } from '@/constants';

// mocks
import { listNavItems } from '@/mocks';

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
  listCategories: IMenu[];
}

export const BurgerMenu = ({ listCategories }: IProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);

  const classNavItem = `w-full h-12 pl-2 rounded-xl hover:bg-white-90 ${flexItemCenter}`;

  const handleToggleMenu = () => setIsOpenMenu(prev => !prev);
  const handleCloseMenu = () => setIsOpenMenu(false);
  const handleCloseSubMenu = () => setIsOpenSubMenu(false);

  const handleToggleSubMenu = () => setIsOpenSubMenu(prev => !prev);

  const handleCloseAllMenu = () => (handleCloseMenu(), handleCloseSubMenu());

  useEffect(() => {
    isOpenMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpenMenu]);

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
                {listCategories.map(category => {
                  const { id, name } = category;
                  return (
                    <li
                      key={id}
                      className="mb-2 last:mb-0"
                      onClick={handleCloseAllMenu}
                    >
                      <Link href={`/category/${id}`}>
                        <Typography
                          tag="p"
                          textSize={Size.XS}
                          additionalClasses="text-dark-75 cursor-pointer hover:text-secondary-100"
                        >
                          { name }
                        </Typography>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            <div>
              {listNavItems.map(navItem => (
                <div key={navItem.id} className={classNavItem}>
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
