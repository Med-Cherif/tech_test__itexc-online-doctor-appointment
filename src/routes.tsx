import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification/OTPVerification";
import Register from "./pages/Register";

const appRoutes = [
  {
    id: 1,
  },
];

const authRoutes = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
  },
  {
    id: 2,
    path: "/register",
    element: <Register />,
  },
  {
    id: 3,
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    id: 4,
    path: "/otp-verification",
    element: <OTPVerification />,
  },
];

export { appRoutes, authRoutes };
