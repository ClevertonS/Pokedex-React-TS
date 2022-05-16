import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { colors } from "./Styles/colors";


const GlobalStyle = createGlobalStyle`
  * {
    background-color: ${colors.backgroundColor}; 
    box-sizing: border-box;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle/>
		<App />
	</React.StrictMode>
);
