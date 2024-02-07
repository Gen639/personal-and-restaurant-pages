import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavF from "./components/NavF/NavF";
import TheHeader from "./components/TheHeader/TheHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavF />
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
