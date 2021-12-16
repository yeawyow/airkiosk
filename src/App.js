import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Home from "./pages/Home";
import Toolbar from "@mui/material/Toolbar";
import HnButton from "./components/fragments/HnButton";
import PatientCheck from "./pages/PatientCheck";

const theme = createTheme({
  typography: {
    // fontFamily: 'Raleway, Arial',
    //fontFamily: "Niramit, sans-serif",
    fontFamily: "Noto Serif Thai, serif",
  },
  palette: {
    primary: {
      main: "#00796b",
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
          <Toolbar variant="dense" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number" element={<HnButton />}></Route>
            <Route path="/pcheck" element={<PatientCheck />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
