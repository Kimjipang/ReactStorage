function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("access token");
  localStorage.removeItem("id");
  localStorage.removeItem("username");
  if (window.confirm("로그아웃 되었습니다.")) {
    window.location.reload();
  }
  // alert("로그아웃 되었습니다.");
}

export default logout;
