/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
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
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/registerSchema";
import { handleUseFormErrors } from "../../helpers/handleUseFormErrors";
import FormErrorMessage from "../../components/common/form/FormErrorMessage";
// import { Route, Routes } from "react-router-dom";

const Register = () => {
  const { form, mutation, onSubmitSuccess } = useAuth("register", {
    resolver: yupResolver(registerSchema) as any,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const { name, email, password } = handleUseFormErrors(errors);

  return (
    <div>
      <AuthTitle title="Sing up your account" icon={icon} />
      <AuthDescription description="Let’s Enter your data to continue use healthy 24 services" />

      <div className="auth-form">
        <div>
          <Label>Fullname</Label>
          <Input placeholder="Enter Your name here" {...register("name")} />
          <FormErrorMessage message={name} />
        </div>
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
          <Checkbox text="by sign up to healthy 24 you agree all terms and condition" />
        </div>
      </div>
      <AuthActionsWrapper>
        <AuthButton
          isLoading={mutation.isLoading}
          onClick={handleSubmit(onSubmitSuccess)}
        >
          Sign Up
        </AuthButton>
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
