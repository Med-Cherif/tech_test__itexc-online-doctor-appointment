import AuthSocialButton from "./AuthSocialButton";
import { FaFacebook } from "react-icons/fa";

interface TProps {
  text: string;
}

const AuthFacebookButton = ({ text }: TProps) => {
  return <AuthSocialButton icon={<FaFacebook fontSize={20} />} text={text} />;
};

export default AuthFacebookButton;
