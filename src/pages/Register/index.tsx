import React from "react";
import AuthTitle from "../../components/auth/AuthTitle";
import AuthDescription from "../../components/auth/AuthDescription";
import Label from "../../components/common/form/Label";
import Input from "../../components/common/form/Input";
import Checkbox from "../../components/common/form/Checkbox";
import AuthActionsWrapper from "../../components/auth/AuthActionsWrapper";
import AuthButton from "../../components/auth/AuthButton";
import AuthSocialButtonsWrapper from "../../components/auth/AuthSocialButtonsWrapper";
import AuthFacebookButton from "../../components/auth/AuthFacebookButton";
import AuthHelperText from "../../components/auth/AuthHelperText";
import AuthGoogleButton from "../../components/auth/AuthGoogleButton";
import icon from "../../assets/images/auth-images/register-icon.png";

const Register = () => {
  return (
    <div>
      <AuthTitle title="Sing up your account" icon={icon} />
      <AuthDescription description="Let’s Enter your data to continue use healthy 24 services" />

      <div className="auth-form">
        <div>
          <Label>Fullname</Label>
          <Input placeholder="Enter Your name here" />
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder="Enter Your email here" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter Your password here" />
        </div>
        <div className="flex align-items-center justify-content-between login-note">
          <Checkbox text="by sign up to healthy 24 you agree all terms and condition" />
        </div>
      </div>
      <AuthActionsWrapper>
        <AuthButton>Sign Up</AuthButton>
        <p className="center or-text">Or</p>
        <AuthSocialButtonsWrapper>
          <AuthGoogleButton text="Sign up with google" />
          <AuthFacebookButton text="Sign up with facebook" />
        </AuthSocialButtonsWrapper>
        <AuthHelperText
          text="You already have account account ?"
          href="/login"
          linkText="Sign in"
        />
      </AuthActionsWrapper>
    </div>
  );
};

export default Register;
