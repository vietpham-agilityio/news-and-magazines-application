interface IProps {
  name: string;
  url?: string;
}

export const NavItem = ({ name, url }: IProps) => (
  <a href={url} className="flex items-center relative">
    <p className="text-sm font-medium text-dark-100 hover:text-primary-100">
      { name }
    </p>
  </a>
);
