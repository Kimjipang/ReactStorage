import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

function Main() {
  const [text, setText] = useState([]);

  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <BackGround>
        <div>
          <Header>메인 페이지</Header>
          <StyleButton
            onClick={() => {
              navigate("/loginver02");
            }}
          >
            Login 버전 2
          </StyleButton>
          <StyleButton
            onClick={() => {
              navigate("signup");
            }}
          >
            Sign Up
          </StyleButton>
          <StyleButton
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
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

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  padding: 8px 12px;
`;
