import MobileHeaderTitle from "./MobileHeaderTitle";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useAppContext } from "../../contexts/appContext";
import CountBadge from "../common/CountBadge";

interface TProps {
  title: string;
}

const MobileHeader = ({ title }: TProps) => {
  const { openSidebar } = useAppContext();
  return (
    <div className="mobile-header">
      <AiOutlineMenu onClick={openSidebar} />
      <MobileHeaderTitle text={title} />
      <div className="mobile-header-notification">
        <IoNotificationsOutline />
        <CountBadge number={2} />
      </div>
    </div>
  );
};

export default MobileHeader;
