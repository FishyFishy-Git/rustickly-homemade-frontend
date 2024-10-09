import { NavLink, Outlet } from "react-router-dom";

function appLayout() {
  return (
    <>
      <header>
        <h4>
          <NavLink>Hompage</NavLink>
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

export default appLayout;
