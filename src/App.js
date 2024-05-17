import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Host from "./components/Host/Host.js";
import Dashboard from "./components/Host/Dashboard.js";
import Income from "./components/Host/Income.js";
import HostVans from "./components/Host/HostVans.js";
import HostVanDetail from "./components/Host/HostVanDetail.js";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import Reviews from "./components/Host/Reviews.js";
import About from "./components/About.js";
import Vans from "./components/Vans/Vans.js";
import VanDetail from "./components/Vans/VanDetail.js";
import Login from "./components/Login.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
