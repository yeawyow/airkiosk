import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/fragments/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
