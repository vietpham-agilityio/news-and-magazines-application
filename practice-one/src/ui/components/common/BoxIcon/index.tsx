interface IProps {
    icon: React.JSX.Element;
    onClick?: () => void;
  }
  
  export const BoxIcon = ({ icon, onClick }: IProps) => (
    <div
      className="w-12 h-12 bg-white-90 flex items-center justify-center rounded-xl"
      onClick={onClick}
    >
    { icon }
  </div>
  );
  