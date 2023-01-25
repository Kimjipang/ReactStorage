import React from "react";
import styled from "styled-components";

function NavCSS() {
  return (
    <div>
      <MyNav>
        <h4>메뉴1</h4>
        <h4>메뉴2</h4>
        <h4>메뉴3</h4>
        <h4>메뉴4</h4>
      </MyNav>
    </div>
  );
}
export default NavCSS;

const MyNav = styled.nav`
  background-color: black;
  width: 100%;
  color: white;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
`;
