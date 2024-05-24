import { Brand, Avatar, NavItem, BoxIcon } from "@/ui/components";

// icons
import {
  ArrowBottom,
  SaveTag,
  Search,
  ThreeDots,
  BurgerMenu,
} from "@/ui/components/Icons";

export const Header = () => (
  <header className="header container flex flex-col items-center justify-center bg-white-100 h-auto mx-auto mt-11 sm:mt-4 lg:mt-11 lg:flex-row">
    <div className="h-12 w-full flex items-center justify-between">
      <div className="flex lg:justify-between items-center flex-1 sm:w-[664px]">
        <div className="mr-[30px] lg:hidden">
          <BoxIcon icon={<BurgerMenu />} />
        </div>
        <div className="w-full flex sm:hidden">
          <label htmlFor="search" className="relative flex-1">
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
              className="w-full h-12 bg-white-90 placeholder-dark-100 rounded-xl px-14"
              placeholder="Search Anything"
            />
          </label>
        </div>
        <div className="hidden sm:block">
          <Brand brandName="MEGA.news" url="/" />
        </div>
        <nav className="hidden w-[476px] items-center justify-center lg:flex">
          <div className="mr-8">
            <NavItem name="Categories" listMenu={[]} />
          </div>
          <div className="mr-8">
            <NavItem name="Pages" listMenu={[]} />
          </div>
          <div className="mr-8">
            <NavItem name="Contact Us" />
          </div>
          <NavItem name="About Us" />
        </nav>
      </div>

      {/*search and user*/}
      <div className="w-[350px] items-center hidden sm:flex lg:w-[656px]">
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
            className="h-12 bg-white-90 placeholder-dark-100 rounded-xl px-14 lg:w-100"
            placeholder="Search Anything"
          />
        </label>
        <div className="flex sm:flex-1 justify-between">
          <div className="flex items-center">
            <Avatar
              width={48}
              height={48}
              url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
            />
            <p className="text-sm font-medium text-dark-100 mx-2">Behzad</p>
            <ArrowBottom />
          </div>
          <BoxIcon icon={<SaveTag />} />
        </div>
      </div>
    </div>

    {/*search on small screen*/}
    <div className="container h-14 hidden my-5 sm:flex lg:hidden">
      <label htmlFor="search" className="relative flex-1">
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
          className="w-full h-12 bg-white-90 placeholder-dark-100 rounded-xl px-14"
          placeholder="Search Anything"
        />
      </label>
    </div>
  </header>
);
