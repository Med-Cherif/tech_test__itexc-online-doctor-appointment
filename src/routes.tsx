import AppLayout from "./components/layouts/AppLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import ProfileLayout from "./components/layouts/ProfileLayout";
import Appointments from "./pages/Appointments";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import MedicalHistory from "./pages/MedicalHistory";
import OTPVerification from "./pages/OTPVerification/OTPVerification";
import PatientDetails from "./pages/Patients/PatientDetailsPage";
import PatientsList from "./pages/Patients/PatientsList";
import ProfileDetails from "./pages/Profile/ProfileDetails";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import Register from "./pages/Register";

const routes = [
  {
    id: 1,
    Layout: <AuthLayout />,
    routes: [
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
    Layout: <AppLayout />,
    routes: [
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
    ],
  },
  {
    id: 3,
    Layout: <ProfileLayout />,
    routes: [
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
