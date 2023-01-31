import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> 이게 있으면 렌더링(요 표현이 맞는지는 모름)을 2번 함.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
