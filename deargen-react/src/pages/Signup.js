import React, { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeEmail = useCallback((event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (event) => {
      const passwordConfirmCurrent = event.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setIsPasswordConfirm(true);
      } else {
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const onChangeUsername = useCallback((event) => {
    const usernameCurrent = event.target.value;
    setUsername(usernameCurrent);
  });

  const navigate = useNavigate();

  return (
    <>
      <h1>Sign Up</h1>
      <label>Email</label>
      <TextField type="email" value={email} onChange={onChangeEmail} />
      <label>Username</label>
      <TextField type="text" value={username} onChange={onChangeUsername} />
      <label>Password</label>
      <TextField type="password" value={password} onChange={onChangePassword} />
      <label>Password Confirm</label>
      <TextField
        type="password"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
      />
      <div>
        <button
          onClick={() => {
            axios
              .post("http://127.0.0.1:8000/register/", {
                email: email,
                username: username,
                password: password,
              })
              .then(function (response) {
                console.log(response);
                navigate("/");
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          회원 가입
        </button>
      </div>
    </>
  );
}

export default Signup;

const TextField = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 15px;
`;
