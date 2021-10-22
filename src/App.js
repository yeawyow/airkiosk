import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
