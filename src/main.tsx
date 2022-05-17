import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { colors } from "./Styles/colors";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: ${colors.backgroundColor}; 
  }
`;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle/>
		<App />
	</React.StrictMode>
);
