import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import theme from "./styles/Theme";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  </ThemeProvider>
);
