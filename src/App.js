import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Vans from "./components/Vans.js";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">#VANLIFE</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
