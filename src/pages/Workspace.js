import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Logout from "../features/logout";
import "animate.css";
import Dashboard from "./Dashboard";

function Workspace() {
  const navigate = useNavigate();

  // isConfirm();
  const token = localStorage.getItem("access token");

  useEffect(() => {
    if (!token) {
      Swal.fire({
        title: "로그인이 필요한 페이지입니다.",
        text: "로그인 페이지로 이동합니다.",
        icon: "warning",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  }, []);

  return (
    token && (
      <div>
        <Dashboard />
      </div>
    )
  );
}

export default Workspace;
