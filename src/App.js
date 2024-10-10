import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

//import pages
import AppLayout from './layout/AppLayouts';
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Quote from './pages/Quote'
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="quote" element={<Quote />} />
      <Route path="admin">
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
