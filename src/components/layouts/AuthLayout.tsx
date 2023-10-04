import { Outlet } from "react-router-dom";
import AuthBgNote from "../auth/AuthBgNote";
import emoji from "../../assets/images/auth-images/emoji.png";
import maskImage from "../../assets/images/auth-images/auth-bg-mask.png";
import note1 from "../../assets/images/auth-images/auth-bg-note-1.png";
import note2 from "../../assets/images/auth-images/auth-bg-note-2.png";

const AuthLayout = () => {
  return (
    <div className="auth-page">
      <div className="auth-page-wrapper">
        <Outlet />
      </div>
      <div className="auth-bg">
        <div className="auth-bg-wrapper">
          <div className="auth-bg-texts">
            <h2>
              We give the best experience
              <img src={emoji} alt="" />
            </h2>
            <p>
              Dedicated virtual consulting platform for docotrs and patients to
              help them consult across vatious channels
            </p>
          </div>
          <div className="auth-bg-notes">
            <AuthBgNote src={note1} order={1} />
            <AuthBgNote src={note2} order={2} />
          </div>
        </div>
        <div className="mask-image-wrapper">
          <img className="mask-image" src={maskImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
