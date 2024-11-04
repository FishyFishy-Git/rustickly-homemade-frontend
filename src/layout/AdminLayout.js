import "./adminLayout.css"
import { NavLink, Outlet } from "react-router-dom"
import logo from '../assests/Rustickly_2.png'

function AdminLayout() {
    return (<>
        <header className="admin-header">
            <section >
                <img src={logo} alt="Rustickly Homemade's logo" id="logo" />
            </section>            
            <NavLink to='/admin/'>Home</NavLink>
            <NavLink to='/admin/portfolio'>Portfolio</NavLink>
            <NavLink to='/admin/about'>About</NavLink>
            <NavLink id="logout">Logout</NavLink>
        </header>
        <Outlet />
    </>)
}

export default AdminLayout