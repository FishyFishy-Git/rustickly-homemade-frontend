import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

//import pages
import landingPage from "./pages/landingPage"
import about from './pages/about'
import portfolio from './pages/portfolio';
import quote from "./pages/qoute"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<landingPage />} />
      <Route path="/about" element={<about />} />
    </Route>
  )
)

function App() {
  return (
    <div>placeholder</div>
  );
}

export default App;
