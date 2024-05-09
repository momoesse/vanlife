import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Vans from "./components/Vans.js";
import VanDetail from "./components/VanDetail.js";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav--container">
          <ul>
            <li><Link to="/">#VANLIFE</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/vans">Vans</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
