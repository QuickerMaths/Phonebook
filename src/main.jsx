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
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "#000",
    },
    secondary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
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
