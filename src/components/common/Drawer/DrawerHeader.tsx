import { AiOutlineClose } from "react-icons/ai";

interface TProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

const DrawerHeader = ({
  children,
  onClose,
  className = "",
  ...rest
}: TProps) => {
  return (
    <div className={`drawer-header ${className}`} {...rest}>
      {children}
      {onClose ? (
        <AiOutlineClose
          className="drawer-header-close-button"
          onClick={() => onClose()}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DrawerHeader;
