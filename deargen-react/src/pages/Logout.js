import React, { useState } from "react";
import styled from "styled-components";

function Logout() {
  const [logout, setLogout] = useState(false);

  const isLogout = () => {
    setLogout(true);
  };
  return;
}

export default Logout;
const BackGround = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
`;
