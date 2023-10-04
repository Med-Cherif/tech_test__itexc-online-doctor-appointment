/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import AuthDescription from "../../components/auth/AuthDescription";
import AuthTitle from "../../components/auth/AuthTitle";
// import Button from "../../components/common/Button";
import Input from "../../components/common/form/Input";
import Label from "../../components/common/form/Label";
import Checkbox from "../../components/common/form/Checkbox";
import AuthButton from "../../components/auth/AuthButton";
import AuthGoogleButton from "../../components/auth/AuthGoogleButton";
import AuthFacebookButton from "../../components/auth/AuthFacebookButton";
import AuthActionsWrapper from "../../components/auth/AuthActionsWrapper";
import AuthSocialButtonsWrapper from "../../components/auth/AuthSocialButtonsWrapper";
import AuthHelperText from "../../components/auth/AuthHelperText";
import icon from "../../assets/images/auth-images/login-icon.png";
import { useAuth } from "../../hooks/useAuth";
import loginSchema from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { handleUseFormErrors } from "../../helpers/handleUseFormErrors";
import FormErrorMessage from "../../components/common/form/FormErrorMessage";

const Login = () => {
  const { form, mutation, onSubmitSuccess } = useAuth("login", {
    resolver: yupResolver(loginSchema) as any,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const { email, password } = handleUseFormErrors(errors);

  return (
    <div>
      <AuthTitle title="Welcome To Healthy 24" icon={icon} />
      <AuthDescription description="Enter your account to use healthy 24 service" />

      <div className="auth-form">
        <div>
          <Label>Email</Label>
          <Input placeholder="Enter Your email here" {...register("email")} />
          <FormErrorMessage message={email} />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter Your password here"
            {...register("password")}
          />
          <FormErrorMessage message={password} />
        </div>
        <div className="flex align-items-center justify-content-between login-note">
          <Checkbox text="Remember Me" />
          <Link className="forgot-password-link" to="/forgot-password">
            Forgot Password
          </Link>
        </div>
      </div>
      <AuthActionsWrapper>
        <AuthButton
          isLoading={mutation.isLoading}
          onClick={handleSubmit(onSubmitSuccess)}
        >
          Sign in
        </AuthButton>
        <p className="center or-text">Or</p>
        <AuthSocialButtonsWrapper>
          <AuthGoogleButton text="Sign in with google" />
          <AuthFacebookButton text="Sign in with facebook" />
        </AuthSocialButtonsWrapper>
        <AuthHelperText
          text="You don't have account account ?"
          href="/register"
          linkText="Sign up"
        />
      </AuthActionsWrapper>
    </div>
  );
};

export default Login;
