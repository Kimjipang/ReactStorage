import React, { useState } from "react";
import axios from "axios";

function Signup() {
  return (
    <>
      <h1>User</h1>
      <div className="btn-primary">
        <button
          onClick={() => {
            axios
              .post("http://127.0.0.1:8000/register/", {
                email: "hi@hi.com",
                username: "hello",
                password: "wlghks97923",
              })
              .then(function (response) {
                console.log(response);
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
