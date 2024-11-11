import "./adminLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/Logo";

function AdminLayout() {
  return (
    <>
      <header>
        <section>
          <Logo></Logo>
        </section>
        <NavLink>Portfolio</NavLink>
        <NavLink>About</NavLink>
        <NavLink id="logout">Logout</NavLink>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
