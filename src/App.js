import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import pages
import AppLayout from './layout/AppLayouts';
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Quote from './pages/Quote'
import AdminLogin from './pages/admin-pages/Login';
import AdminLayout from './layout/AdminLayout';
import AdminHome from './pages/admin-pages/Home';
import AdminPortfolio from './pages/admin-pages/Portfolio';
import AdminAbout from './pages/admin-pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="quote" element={<Quote />} />
    </Route>
    <Route path="admin" element={<AdminLayout />}>
      <Route path="/admin" element={<AdminHome />} />
      <Route path="login" element={<AdminLogin />} />
      <Route path="portfolio" element={<AdminPortfolio />} />
      <Route path="about" element={<AdminAbout />} />
    </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
