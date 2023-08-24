import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/screens/home/landingpage/LandingPage";
import LoginPage from "../components/screens/home/login/LoginPage";
import ProjectDetailPage from "../components/screens/api-hub/projectDetails/ProjectDetailPage";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/projectDetails" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
