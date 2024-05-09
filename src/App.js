import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Vans from "./components/Vans.js";
import VanDetail from "./components/VanDetail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
