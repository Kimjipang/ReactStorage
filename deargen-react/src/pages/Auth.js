import React, { useEffect } from "react";

function Auth() {
  const token = localStorage.getItem("access token");
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      alert("접근 권한이 없는 페이지입니다. 로그인을 먼저 해주세요 !");
    }
  }, []);
}
