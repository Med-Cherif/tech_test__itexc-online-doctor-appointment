import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Required").min(3),
  email: yup.string().required("Required").email(),
  password: yup.string().required("Required").min(6),
});

export default registerSchema;
