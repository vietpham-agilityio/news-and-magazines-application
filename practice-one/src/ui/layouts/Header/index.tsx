// mocks
import { listCategories, listNavItems } from '@/mocks';

// components
import {
  Menu,
  Brand,
  Avatar,
  NavItem,
  BoxIcon,
  SearchBar,
  BurgerMenu,
} from '@/ui/components';

// icons
import { ArrowBottom, SaveTag, Search, ThreeDots } from '@/ui/components/Icons';

export const Header = () => (
  <header className="header container flex flex-col items-center justify-center bg-white-100 h-auto mx-auto mt-11 sm:mt-4 lg:mt-11 lg:flex-row">
    <div className="h-12 w-full flex items-center justify-between">
      <div className="flex items-center w-full sm:w-[664px] lg:flex-0 lg:justify-between">
        {/* Burger menu */}
        <div className="mr-[30px] lg:hidden">
          <BurgerMenu listNav={listNavItems} />
        </div>
        {/* Search in small screen */}
        <div className="flex flex-1 sm:hidden">
          <SearchBar
            name="search"
            type="text"
            leftIcon={<ThreeDots />}
            rightIcon={<Search />}
            placeholder="Search everything"
          />
        </div>
        {/* Brand */}
        <div className="hidden sm:block">
          <Brand brandName="MEGA.news" url="/" />
        </div>
        <nav className="hidden w-[476px] items-center justify-center lg:flex">
          <div className="mr-8">
            <Menu name="Categories" listMenu={listCategories} />
          </div>
          <div className="mr-8">
            <NavItem name="Pages" url="/pages" />
          </div>
          <div className="mr-8">
            <NavItem name="Contact Us" url="/contact" />
          </div>
          <NavItem name="About Us" url="/about" />
        </nav>
      </div>

      {/*Search and user*/}
      <div className="w-[350px] items-center justify-end hidden sm:flex lg:w-[656px]">
        <label htmlFor="search" className="relative mr-6 hidden xl:block">
          <div className="absolute left-6 top-4">
            <ThreeDots />
          </div>
          <div className="absolute right-4 top-3">
            <Search />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="h-12 bg-white-90 placeholder-dark-100 rounded-xl outline-none px-14 lg:w-100"
            placeholder="Search Anything"
          />
        </label>
        <div className="flex xl:flex-1 justify-between">
          <div className="flex items-center mr-8 xl:mr-0">
            <Avatar
              width={48}
              height={48}
              url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
            />
            <p className="text-sm font-medium text-dark-100 mx-2">Behzad</p>
            <ArrowBottom />
          </div>
          <BoxIcon icon={<SaveTag />} additionalClasses="w-12" />
        </div>
      </div>
    </div>

    {/*search on small screen*/}
    <div className="container h-14 hidden my-5 sm:flex lg:hidden">
      <SearchBar
        name="search"
        type="text"
        leftIcon={<ThreeDots />}
        rightIcon={<Search />}
        placeholder="Search everything"
      />
    </div>
  </header>
);
