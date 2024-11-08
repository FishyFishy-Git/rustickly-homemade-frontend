import "./adminLayout.css"
import { NavLink, Outlet } from "react-router-dom"
import logo from '../assets/Rustickly_2.png'

function AdminLayout() {
    return (<>
        <header className="admin-header">
            <section >
                <img src={logo} alt="Rustickly Homemade's logo" id="logo" />
            </section>
            <div className="admin-links">
                <NavLink to='/admin/' className={'admin-nav'} >Home</NavLink>
                <NavLink to='/admin/about' className={'admin-nav'} >About</NavLink>
                <NavLink to='/admin/portfolio' className={'admin-nav'} >Portfolio</NavLink>
                <NavLink id="logout" className={'admin-nav'} >Logout</NavLink>
            </div>
        </header>
        <Outlet />
    </>)
}

export default AdminLayout