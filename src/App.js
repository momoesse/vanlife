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
import HostVans, { loader as hostVansLoader } from "./components/Host/HostVans.js";
import HostVanDetail, { loader as hostVanDetailLoader } from "./components/Host/HostVanDetail.js";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import Reviews from "./components/Host/Reviews.js";
import About from "./components/About.js";
import Vans, { loader as vansLoader } from "./components/Vans/Vans.js";
import VanDetail, { loader as vanDetailLoader } from "./components/Vans/VanDetail.js";
import Login from "./components/Login.js";
import NotFound from "./components/NotFound.js";
import Error from "./components/Error.js";
import { requireAuth } from "./utils.js";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={<Error />}>
    <Route path="/" element={<Home />} />
    <Route path="host" element={<Host />}>
      <Route index 
        element={<Dashboard />} 
        loader={ async () => {
          return null
        }} />
      <Route path="income" 
        element={<Income />} 
        loader={ async () => {
          return null
        }} />
      <Route path="vans" 
        element={<HostVans />} 
        loader={hostVansLoader} />
      <Route path="vans/:id" 
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}>
        <Route index 
          element={<HostVanInfo />} 
          loader={ async () => {
            return null
          }}/>
        <Route path="pricing" 
          element={<HostVanPricing />} 
          loader={ async () => {
            return null
          }}/>
        <Route path="photos" 
          element={<HostVanPhotos />} 
          loader={ async () => {
            return null
          }}/>
      </Route>
      <Route path="reviews" 
        element={<Reviews />} 
        loader={ async () => {
          return null
        }}/>
    </Route>
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
