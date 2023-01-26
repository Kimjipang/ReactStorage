import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Workspace from "./pages/Workspace";
import Loginver02 from "./pages/Loginver02";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/loginver02" element={<Loginver02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
