import "./adminLayout.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Rustickly_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function AdminLayout() {
    const [click, setClick] = useState(false);
    const closeMenu = () => {
        setClick(false);
    };

    const NavLinks = () => {
        return (
            <div className="admin-links">
                <NavLink
                    to="/admin/"
                    className={"admin-nav"}
                    onClick={() => closeMenu()}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/admin/about"
                    className={"admin-nav"}
                    onClick={() => closeMenu()}
                >
                    About
                </NavLink>
                <NavLink
                    to="/admin/portfolio"
                    className={"admin-nav"}
                    onClick={() => closeMenu()}
                >
                    Portfolio
                </NavLink>
            </div>
        );
    };

    return (
        <>
            {/* desktop layout */}
            <header className="desktop-nav">
                <img
                    src={logo}
                    alt="Rustickly Homemade's logo"
                    id="admin-logo"
                />
                <NavLinks />
                <NavLink id="logout" className={"admin-nav"}>
                    Logout
                </NavLink>
            </header>

            {/* mobile layout */}
            <header className="mobile-nav">
                {/* hamburger menu */}
                {click ? (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="mobile-icon"
                        onClick={() => setClick(!click)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        className={"mobile-icon"}
                        onClick={() => setClick(!click)}
                    />
                )}

                {/* company logo */}
                <img
                    src={logo}
                    alt="Rustickly Homemade's logo"
                    id="admin-logo"
                />

                {/* logout button */}
                <NavLink>
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className={"mobile-icon"}
                    />
                </NavLink>

                {/* menu */}
                {click && <NavLinks />}
            </header>
            <Outlet />
        </>
    );
}

export default AdminLayout;
