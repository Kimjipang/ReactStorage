import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProjectPage from "./pages/ProjectPage";
import Workspace from "./pages/Workspace";
import Profile from "./pages/ProfilePage";
import Main from "./pages/Main";
import ProjectForm from "./components/projectForm";
import DashBoard from "./pages/DashBoard";
import JobPage from "./pages/JobPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/projectform" element={<ProjectForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Main />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
