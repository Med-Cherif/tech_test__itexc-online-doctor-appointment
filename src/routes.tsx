import AppLayout from "./components/layouts/AppLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import ProfileLayout from "./components/layouts/ProfileLayout";
import Appointments from "./pages/Appointments";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import MedicalHistory from "./pages/MedicalHistory";
import Messages from "./pages/Messages";
import OTPVerification from "./pages/OTPVerification/OTPVerification";
import PatientDetails from "./pages/Patients/PatientDetailsPage";
import PatientsList from "./pages/Patients/PatientsList";
import ProfileDetails from "./pages/Profile/ProfileDetails";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import Register from "./pages/Register";

const routes = [
  {
    id: 1,
    element: <AuthLayout />,
    children: [
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
    ],
  },
  {
    id: 2,
    element: <AppLayout />,
    children: [
      {
        id: 1,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        id: 2,
        path: "/medical-history",
        element: <MedicalHistory />,
      },
      {
        id: 3,
        path: "/patients",
        element: <PatientsList />,
      },
      {
        id: 3,
        path: "/patients/:id",
        element: <PatientDetails />,
      },
      {
        id: 4,
        path: "/appointment",
        element: <Appointments />,
      },
      {
        id: 5,
        path: "/messages/*",
        element: <Messages />,
      },
    ],
  },
  {
    id: 3,
    element: <ProfileLayout />,
    children: [
      {
        id: 1,
        path: "/profile",
        element: <ProfileDetails />,
      },
      {
        id: 2,
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
    ],
  },
];

export default routes;
