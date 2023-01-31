import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LoginVer02 from "./pages/Login";
import Workspace from "./pages/Workspace";
import Dashboard from "./pages/Dashboard";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginver02" element={<LoginVer02 />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;