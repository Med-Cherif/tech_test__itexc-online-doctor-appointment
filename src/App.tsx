import { Routes, Route, Navigate } from "react-router-dom";
// import AppLayout from "./components/layouts/AppLayout";

import routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {routes.map((route) => {
          return (
            <Route key={route.id} path="/" element={route.Layout}>
              {route.routes.map((r) => {
                const { id, ...rest } = r;
                return <Route key={id} {...rest} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
