import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
