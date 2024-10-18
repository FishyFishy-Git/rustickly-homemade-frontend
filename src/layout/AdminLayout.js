import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
    return (<>
        <header>
            <NavLink>Portfolio</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Logout</NavLink>
        </header>
        <Outlet />
    </>)
}

export default AdminLayout