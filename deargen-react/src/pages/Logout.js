import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function Logout() {
  localStorage.removeItem("access token");
}

export default Logout;
