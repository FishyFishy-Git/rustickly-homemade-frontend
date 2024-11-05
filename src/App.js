import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//import pages
import AppLayout from "./layout/AppLayouts";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Quote from "./Pages/Quote";
import Login from "./Pages/Login";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./Pages/Admin";

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
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
