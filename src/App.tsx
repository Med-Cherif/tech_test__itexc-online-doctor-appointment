import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.id} path="/" element={route.element}>
              {route.children.map((child) => {
                const { id, ...rest } = child;
                return <Route key={id} {...rest} />;
              })}
            </Route>
          );
        })}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
