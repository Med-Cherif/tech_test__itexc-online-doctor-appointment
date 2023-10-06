import { createPortal } from "react-dom";
import Backdrop from "../Backdrop";
import DrawerAside from "./DrawerAside";
import { useEffect, useState } from "react";

interface TProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  afterClose?: () => void;
  // transitionDuration?: string
}

const Drawer = ({ open, children, onClose, afterClose }: TProps) => {
  const [isVisible, setIsVisible] = useState(open);

  const transitionDuration = "400";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (open) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
        afterClose?.();
      }, parseFloat(transitionDuration + 50));
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [open]);

  return createPortal(
    <div className={`drawer ${open ? "open" : ""}`}>
      <Backdrop
        transitionDuration={transitionDuration}
        visible={open}
        onClick={onClose}
      />
      <DrawerAside transitionDuration={transitionDuration}>
        {isVisible ? children : <></>}
      </DrawerAside>
    </div>,
    document.getElementById("drawer")!
  );
};

export default Drawer;
