import { HTMLInputTypeAttribute } from 'react';

interface IProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}

export const Input = ({ name, label, type, placeholder }: IProps) => (
  <div>
    <label
      className="block text-dark-100 text-sm font-medium mb-4"
      htmlFor={name}
    >
      { label }
    </label>
    <input
      className="rounded-2xl w-full h-12 py-2 px-4 bg-white-90 text-dark-90 placeholder-dark-50 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      type={type}
      placeholder={placeholder}
    />
  </div>
);
