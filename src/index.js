import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";

const el1=document.querySelector("#root");
const el2=ReactDOM.createRoot(el1);

el2.render (<App/>);