interface IProps {
    icon: React.JSX.Element;
  }
  
  export const BoxIcon = ({ icon }: IProps) => (
    <div className="w-12 h-12 bg-white-90 flex items-center justify-center rounded-xl">
    { icon }
  </div>
  );
  