import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Host from "./components/Host/Host.js";
import Dashboard from "./components/Host/Dashboard.js";
import Income from "./components/Host/Income.js";
import HostVans , { loader as hostVansLoader } from "./components/Host/HostVans.js";
import HostVanDetail from "./components/Host/HostVanDetail.js";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import Reviews from "./components/Host/Reviews.js";
import About from "./components/About.js";
import Vans, { loader as vansLoader } from "./components/Vans/Vans.js";
import VanDetail from "./components/Vans/VanDetail.js";
import NotFound from "./components/NotFound.js";
import Error from "./components/Error.js";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={<Error />}>
    <Route path="/" element={<Home />} />
    <Route path="host" element={<Host />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
