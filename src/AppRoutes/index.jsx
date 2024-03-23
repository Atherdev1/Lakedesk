import React from "react";
import Landing from "../Pages/Landing/components/Landing";
import { Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth/components/Auth";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
