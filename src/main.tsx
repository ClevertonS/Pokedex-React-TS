import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import  colors  from "./Styles/colors";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${colors.backgroundColor}; 
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle/>
		<App />
	</React.StrictMode>
);
