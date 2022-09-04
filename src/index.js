import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
