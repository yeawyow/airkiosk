import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./components/fragments/Logo";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IdCard from "./pages/IdCard";
import ManualCid from "./components/fragments/ManualCid";
import Patient from "./pages/Patient";

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
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Router>
              <Toolbar variant="dense" />
              <Routes>
                <Route path="/" element={<IdCard />}></Route>
                <Route path="/buttonkey" element={<ManualCid />}></Route>
                <Route path="/patient" element={<Patient />}></Route>
              </Routes>
            </Router>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
