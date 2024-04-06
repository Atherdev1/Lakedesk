import React from "react";
import Landing from "../Pages/Landing/components/Landing";
import { Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth/components/Auth";
import SetPassword from "../Pages/Auth/components/SetPassword";
import ForgetPassword from "../Pages/Auth/components/ForgetPassword";
import Dashboard from "../Pages/Dashboard/index";
import VerifyEmail from "../Pages/Auth/components/VerifyEmail";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/set-password/:token" element={<SetPassword />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/verify/:token" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
