interface IProps {
  url: string;
  brandName: string;
}

export const Brand = ({ url, brandName }: IProps) => (
  <a href={url}>
    <h1
     className="text-lg font-bold text-secondary-100"
    >
      { brandName }
    </h1>
  </a>
);
