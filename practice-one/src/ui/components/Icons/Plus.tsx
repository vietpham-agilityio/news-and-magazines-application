interface IProps {
    color?: string;
  }

export const Plus = ({ color="#FFF"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
  >
    <path
      fill={color}
      d="M11.688 5.75c0 .492-.41.902-.876.902H6.876v3.938c0 .465-.41.848-.875.848a.858.858 0 0 1-.875-.848V6.652H1.187c-.492 0-.875-.41-.875-.902 0-.465.383-.848.875-.848h3.938V.965c0-.492.383-.902.875-.902.465 0 .875.41.875.902v3.937h3.938c.464-.027.874.383.874.848Z"
    />
  </svg>
);
