import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LoginVer02 from "./pages/LoginVer02";
import LoginVer03 from "./pages/LoginVer03";
import Workspace from "./pages/Workspace";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginver02" element={<LoginVer02 />} />
          <Route path="/loginver03" element={<LoginVer03 />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
