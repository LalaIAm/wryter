import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AuthWrapper from "./layouts/AuthWrapper";
import React from "react";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <AuthWrapper>
          <SignUp />
        </AuthWrapper>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthWrapper>
          <LogIn />
        </AuthWrapper>
      ),
    },
    {
      path: "/dashboard",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
