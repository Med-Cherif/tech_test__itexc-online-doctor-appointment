import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("Required").email(),
  password: yup.string().required("Required").min(6),
});

export default loginSchema;
