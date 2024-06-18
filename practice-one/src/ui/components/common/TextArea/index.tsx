interface IProps {
  label: string;
  placeholder?: string;
}

export const TextArea = ({ label, placeholder }: IProps) => (
  <div className="w-full">
    <label
      htmlFor="textarea"
      className="block text-dark-100 text-sm font-medium mb-4"
    >
      { label }
    </label>
    <textarea
      id="textarea"
      className="rounded-2xl w-full h-36 sm:h-63 py-6 px-5 bg-white-90 text-dark-90 placeholder-dark-50 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  </div>
);
