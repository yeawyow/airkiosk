import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Home from "./components/Home";
import Toolbar from "@mui/material/Toolbar";
import Header from "./components/fragments/Header";
import HnButton from "./components/fragments/HnButton";

const theme = createTheme({
  typography: {
    // fontFamily: 'Raleway, Arial',
    //fontFamily: "Niramit, sans-serif",
    fontFamily: "Noto Serif Thai, serif",
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
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number" element={<HnButton />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
