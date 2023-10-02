import { useLocation } from "react-router-dom";
import AuthTitle from "../../components/auth/AuthTitle";
import AuthDescription from "../../components/auth/AuthDescription";
import AuthButton from "../../components/auth/AuthButton";
import AuthHelperText from "../../components/auth/AuthHelperText";
import parseParams from "../../helpers/parseParams";
import icon from "../../assets/images/auth-images/otp-icon.png";
import OTPInput from "../../components/common/form/OTPInput";

const OTPVerification = () => {
  const { search } = useLocation();

  const { email } = parseParams(search);

  return (
    <div>
      <AuthTitle title="OTP Verification" icon={icon} />
      <AuthDescription
        description={
          <>
            Our team already sent you an email in your inbox{" "}
            <span className="font-bold">{email}</span> to Access back your
            account
          </>
        }
      />

      <div className="auth-form">
        <div>
          <OTPInput
            onChange={(value) => {
              console.log(value);
            }}
          />
        </div>
        <AuthButton>Continue</AuthButton>
        <AuthHelperText
          onClick={() => {}}
          linkText="Resend"
          text="*didn’t receive verificatin code ?"
        />
      </div>
    </div>
  );
};

export default OTPVerification;
