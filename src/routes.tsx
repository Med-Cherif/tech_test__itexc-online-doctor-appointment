const appRoutes = [
  {
    id: 1,
  },
];

const authRoutes = [
  {
    id: 1,
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    id: 2,
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    id: 3,
    path: "/forgot-password",
    element: <h1>Forgot Password</h1>,
  },
  {
    id: 4,
    path: "/otp-verification/:email",
    element: <h1>Otp Verification</h1>,
  },
];

export { appRoutes, authRoutes };
