import "./App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

// import pages
import AppLayout from "./layout/AppLayouts";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Quote from "./pages/Quote";
import AdminLayout from "./layout/AdminLayout";
import AdminLogin from "./pages/admin-pages/AdminLogin";
import AdminHome from "./pages/admin-pages/AdminHome";
import AdminAbout from "./pages/admin-pages/AdminAbout";
import AdminPortfolio from "./pages/admin-pages/AdminPortfolio";
import AdminProvider from "./contexts/AdminContext";


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
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="home" element={<AdminHome />} />
                <Route path="portfolio" element={<AdminPortfolio />} />
                <Route path="about" element={<AdminAbout />} />
            </Route>
        </>
    )
);

function App() {
    return (
        <AdminProvider>
            <RouterProvider router={router} />
        </AdminProvider>
    );
}

export default App;
