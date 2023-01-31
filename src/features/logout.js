import { useEffect } from "react";

function logout() {
  localStorage.removeItem("access token");
  localStorage.removeItem("refresh token");
  if (window.confirm("로그아웃 되었습니다.")) {
    window.location.reload();
  }
  // alert("로그아웃 되었습니다.");
}

export default logout;
