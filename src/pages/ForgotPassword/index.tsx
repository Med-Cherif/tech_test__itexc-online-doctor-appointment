// import AuthActionsWrapper from "../../components/auth/AuthActionsWrapper";
import AuthButton from "../../components/auth/AuthButton";
import AuthDescription from "../../components/auth/AuthDescription";

import AuthTitle from "../../components/auth/AuthTitle";
import Input from "../../components/common/form/Input";
import Label from "../../components/common/form/Label";
import icon from "../../assets/images/auth-images/forgot-password-icon.png";

const ForgotPassword = () => {
  return (
    <div>
      <AuthTitle title="Forgot Password" icon={icon} />
      <AuthDescription description="Enter your email to recover password " />

      <div className="auth-form">
        <div>
          <Label>Email</Label>
          <Input placeholder="Enter Your email here" />
        </div>
        <AuthButton>Sign in</AuthButton>
      </div>
    </div>
  );
};

export default ForgotPassword;
