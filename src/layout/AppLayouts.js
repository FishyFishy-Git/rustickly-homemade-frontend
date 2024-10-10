import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>
        <h4>
          <NavLink>LandingPage</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Quotes</NavLink>
          <NavLink>About Us</NavLink>
        </h4>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}

export default AppLayout;
