// constants
import { flexCenter } from '@/constants';

// components
import { Button } from '@/ui/components/common';

// icons
import { Home, SaveTag, User, ChevronsUp } from '@/ui/components/Icons';

export const FooterBar = () => (
  <footer className="footer w-full flex items-center justify-between bg-white-100 h-17.5 fixed bottom-0 px-7.5 py-4 rounded-t-2xl shadow-inner sm:hidden">
    <Button
      label="Home"
      textColor="text-white-100"
      bgColor="bg-gradient-to-bl from-sunSet-0 to-sunSet-100"
      leftIcon={<Home />}
    />
    <div className={`${flexCenter} w-10 h-10`}>
      <SaveTag />
    </div>
    <div className={`${flexCenter} w-10 h-10`}>
      <User />
    </div>
    <div className={`${flexCenter} w-10 h-10`}>
      <ChevronsUp />
    </div>
  </footer>
);
