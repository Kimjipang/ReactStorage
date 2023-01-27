import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "@mui/material/Container";

function Login() {
  // 이메일, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  // 비밀번호
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <h1>Login</h1>
      <label>Email</label>
      <TextField
        type="email"
        value={email}
        placeholder="Email"
        onChange={onChangeEmail}
      />
      <br />
      <label>Passowrd</label>
      <TextField
        type="password"
        value={password}
        placeholder="Password"
        onChange={onChangePassword}
      />
      <br />
      <ButtonLogin
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
              const name = response.data.user.username;
              localStorage.setItem("access token", response.data.token.access);
              localStorage.setItem(
                "refresh token",
                response.data.token.refresh
              );
              if (response.status === 200) {
                // navigate("/workspace");
                alert("어서오세요! " + name + "님");
              }
            })
            .catch(function (error) {
              console.log(error);
              console.log("잘못된 유저 정보");
            });
        }}
      >
        {/* {" "} */}
        로그인
      </ButtonLogin>
    </Container>
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

const ButtonLogin = styled.button`
  container-color: #0095f6;
  color: white;
  width: 268px;
  height: 30px;
  margin: 8px 40px 8px 40px;
  border: none;
  border-radius: 5px;
`;

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const onChangePassword = (event) => {
//     setPassword(event.target.value);
//   };
