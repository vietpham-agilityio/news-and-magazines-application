import { memo } from "react";

interface IProps {
  name: string;
  type?: string;
  placeholder: string;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
}

export const SearchBar = memo(
  ({ name, type, placeholder, leftIcon, rightIcon }: IProps) => (
    <label htmlFor={name} className="relative flex-1">
      <div className="absolute left-6 top-4">
        { leftIcon }
      </div>
      <div className="absolute right-4 top-3">
        { rightIcon }
      </div>
      <input
        id={name}
        type={type}
        name={name}
        className="w-full h-12 bg-white-90 placeholder-dark-100 rounded-xl outline-none px-14"
        placeholder={placeholder}
      />
    </label>
  )
);

SearchBar.displayName = "SearchBar";
