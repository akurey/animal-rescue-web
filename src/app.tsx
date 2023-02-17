import "./styles/global.scss";
// import '@/assets/images/favicon.ico';
import React from "react";
import "./i18n/i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routing from "./app.routing";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFEF0A",
    },
  },
});

function AppComponent() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routing />
    </ThemeProvider>
  );
}

export default AppComponent;
