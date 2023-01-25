import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <BackGround>
      <h1>Login</h1>
      <label>Email</label>
      <TextField type="email" value={email} onChange={onChangeEmail} />
      <br />
      <label>Passowrd</label>
      <TextField type="password" value={password} onChange={onChangePassword} />
      <br />
      <button
        onClick={() => {
          axios
            .post("http://127.0.0.1:8000/auth/", {
              email: email,
              password: password,
            })
            .then(function (response) {
              console.log(response.data);
              localStorage.clear();
              localStorage.setItem("id", response.data.user.id);
              localStorage.setItem("access token", response.data.token.access);
              localStorage.setItem(
                "refresh token",
                response.data.token.refresh
              );
              if (response.status === 200) {
                navigate("/");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        {" "}
        로그인
      </button>
    </BackGround>
  );
}

export default Login;

const TextField = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 15px;
`;
const BackGround = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
`;
