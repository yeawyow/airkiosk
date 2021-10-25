import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Home from "./components/Home";
import Header from "./components/fragments/Header";

const theme = createTheme({
  typography: {
    // fontFamily: 'Raleway, Arial',
    fontFamily: "Niramit, sans-serif",
  },
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
