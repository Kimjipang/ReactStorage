import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import NavCSS from "./Nav";

function Main() {
  const [text, setText] = useState([]);
  const [login, setLogin] = useState(false);

  const isLogin = () => {
    setLogin(true);
  };
  const navigate = useNavigate();

  return (
    <>
      <NavCSS />
      <BackGround>
        <div>
          <Header>메인 페이지</Header>

          <StyleButton
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </StyleButton>

          <StyleButton
            onClick={() => {
              axios
                .get("http://127.0.0.1:8000/user/")
                .then((response) => {
                  setText([...response.data]);
                  console.log(response.data);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            {" "}
            유저 목록
          </StyleButton>
          <NavBar>
            <ul>
              <li>
                <a href="#">Workspace</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
          </NavBar>
        </div>
        {text.map((e) => (
          <div>
            {" "}
            <div className="list">
              <span>
                {e.id}번, {e.username}, {e.email}
              </span>
              <StyleButton
                onClick={() => {
                  axios.delete(`http://127.0.0.1:8000/user/${e.id}`);
                  setText(text.filter((text) => text.id !== e.id));
                }}
              >
                DELETE
              </StyleButton>{" "}
            </div>
          </div>
        ))}
      </BackGround>
    </>
  );
}

export default Main;
const BackGround = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
`;

const StyleButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

const Header = styled.h1`
  color: royalblue;
  font-size: 50px;
  background-color: beige;
`;

const FootButton = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 5px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  padding: 8px 12px;
`;
