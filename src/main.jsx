import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import store from "./redux/store.js";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e3f2fd",
      light: "#90caf9",
      dark: "#42a5f5",
      contrastText: "#000",
    },
    secondary: {
      main: "#ffb74d",
      light: "#ffa726",
      dark: "#ffa726",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline />
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
