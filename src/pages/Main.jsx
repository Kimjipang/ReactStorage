import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import logout from "../features/logout";
import Workspace from "./Workspace";
import Swal from "sweetalert2";

function Main() {
  const [text, setText] = useState([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };
  const onCreateWorkspace = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/workspace/", {
        user: localStorage.getItem("id"),
        content: content,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          Swal.fire({
            title: "어서오세요! ",
            icon: "success",
            showClass: {
              popup: "animate__animated animate__jackInTheBox",
            },
            hideClass: {
              popup: "animate__animated animate__rollOut",
            },
          });
        }
      });
  };

  const onDeleteWorkspace = (event) => {
    event.preventDefault();
    axios
      .delete("http://127.0.0.1:8000/workspace/${event.wid}")
      .then(function (response) {
        if (response.status === 204) {
          console.log("삭제 성공");
        }
      });
  };

  return (
    <>
      <BackGround>
        <div>
          <Header>Dear DTI</Header>

          {/* <StyleButton onClick={onCreateWorkspace}>
            Create Workspace
          </StyleButton>
          <StyleButton onClick={onDeleteWorkspace}>
            Delete Workspace
          </StyleButton> */}
          <StyleButton
            onClick={() => {
              navigate("/dashboard");
            }}
            variant="outlined"
          >
            Go to Workspace
          </StyleButton>

          {/* <StyleButton
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
          </StyleButton> */}
        </div>
        {/* {text.map((e) => (
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
        ))} */}
      </BackGround>
    </>
  );
}

export default Main;
const BackGround = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  // margin-top: 100px;
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
  color: white;
  font-size: 50px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  padding: 8px 12px;
`;
