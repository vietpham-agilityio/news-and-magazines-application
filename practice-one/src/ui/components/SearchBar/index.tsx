// icons
import { Search } from '@/ui/components/Icons';

interface IProps {
  name: string;
  type?: string;
  placeholder: string;
}

export const SearchBar = ({
  name,
  type,
  placeholder,
}: IProps) => (
  <div className="w-full flex relative">
  <label htmlFor={name} className="flex-1">
    <input
      id={name}
      type={type}
      name={name}
      className="w-full h-12 bg-white-90 placeholder-dark-100 rounded-xl outline-none pl-4 pr-14"
      placeholder={placeholder}
    />
  </label>
    <div className="absolute right-4 top-3">{<Search />}</div>
  </div>
);
