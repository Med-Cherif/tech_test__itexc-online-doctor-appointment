import MobileHeaderTitle from "./MobileHeaderTitle";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const MobileHeaderDetailsPage = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(`/${href}`);
  };

  return (
    <div className="mobile-header">
      <BsArrowLeft onClick={onBackClick} />
      <MobileHeaderTitle text={text} />
      <div></div>
    </div>
  );
};

export default MobileHeaderDetailsPage;
