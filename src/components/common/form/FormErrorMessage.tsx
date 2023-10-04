interface TProps {
  message: string | undefined | null;
}

const FormErrorMessage = ({ message }: TProps) => {
  return message ? <p className="form-error-message">{message}</p> : null;
};

export default FormErrorMessage;
