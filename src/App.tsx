import { Routes, Route } from "react-router-dom";
// import AppLayout from "./components/layouts/AppLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import { authRoutes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<AppLayout />}>
          {appRoutes.map((route) => {
            const {} = route
            return <Route key={route.id} />
          })}
        </Route> */}
        <Route path="/" element={<AuthLayout />}>
          {authRoutes.map((route) => {
            const { id, ...rest } = route;
            return <Route key={id} {...rest} />;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
