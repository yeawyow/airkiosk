import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Toolbar from "@mui/material/Toolbar";
import ManualCid from "./pages/ManualCid";
import VisitRegister from "./pages/VisitRegister";

const theme = createTheme({
  typography: {
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
        <Router>
          <Toolbar variant="dense" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/number" element={<ManualCid />}></Route>
            <Route path="/visitRegister" element={<VisitRegister />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
