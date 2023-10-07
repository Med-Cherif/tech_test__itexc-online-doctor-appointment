import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.scss";
import store from "./store/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppProvider from "./contexts/appContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <App />
            <ToastContainer limit={1} />
          </AppProvider>
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
