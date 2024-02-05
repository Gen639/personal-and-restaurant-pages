import React from "react";
import HeaderF from "./components/HeaderF/HeaderF";
import HomeF from "./components/HomeF/HomeF";
import ReserveF from "./components/ReserveF/ReserveF";

import "./App.css";
import NavF from "./components/NavF/NavF";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavF />
        <Routes>
          <Route path="/" element={<HeaderF />} />
          <Route path="/menu" element={<HomeF />} />
          <Route path="/reserve" element={<ReserveF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
