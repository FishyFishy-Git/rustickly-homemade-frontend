import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>
        <h4 className="originNav">
          <NavLink>LandingPage</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink to="quote">Quotes</NavLink>
          <NavLink>About Us</NavLink>
        </h4>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}

export default AppLayout;
