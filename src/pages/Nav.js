import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <MyNav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/login">Sign In</NavLink>
      </div>
      <div>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div>
        <NavLink to="/workspace">MY Workspace</NavLink>
      </div>
    </MyNav>
  );
};
export default Nav;

const MyNav = styled.nav`
  background-color: royalblue;
  width: 100%;
  color: white;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
`;
