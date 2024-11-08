import "./adminLayout.css"
import { NavLink, Outlet } from "react-router-dom"
import logo from '../assets/Rustickly_2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function AdminLayout() {
    const handleMenu = () => {

    }

    return (<>
        <header className="admin-header">
            <FontAwesomeIcon
                icon={faBars}
                className={'mobile-icon'}
                onClick={handleMenu}
            />
            <img src={logo} alt="Rustickly Homemade's logo" id="admin-logo" />
            <div className="admin-links">
                <NavLink to='/admin/' className={'admin-nav'} >Home</NavLink>
                <NavLink to='/admin/about' className={'admin-nav'} >About</NavLink>
                <NavLink to='/admin/portfolio' className={'admin-nav'} >Portfolio</NavLink>
            </div>
            <NavLink id="logout" className={'admin-nav'} >Logout</NavLink>
            <NavLink>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className={'mobile-icon'} />
            </NavLink>
            
        </header>
        <Outlet />
    </>)
}

export default AdminLayout;
