import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Workspace() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access token");
    if (!token) {
      window.location.href("/loginver02");
      // alert("접근할 수 없는 페이지입니다.");
    }
  }, []);
  return (
    <div>
      <h1>로그아웃 페이지</h1>
    </div>
  );
}

export default Workspace;
