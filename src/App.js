import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//import pages
import AppLayout from "./layout/AppLayouts";
import LandingPage from "./Pages/landingPage";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Quote from "./Pages/Quote";
import Login from "./Pages/login";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./Pages/admin";
import AdminPortfolio from "./Pages/AdminPortfolio";

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
        <Route path="/admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="portfolio" element={<AdminPortfolio />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
