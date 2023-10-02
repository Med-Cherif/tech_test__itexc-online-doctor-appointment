import AuthSocialButton from "./AuthSocialButton";
import { AiOutlineGoogle } from "react-icons/ai";

interface TProps {
  text: string;
}

const AuthGoogleButton = ({ text }: TProps) => {
  return (
    <AuthSocialButton icon={<AiOutlineGoogle fontSize={22} />} text={text} />
  );
};

export default AuthGoogleButton;
