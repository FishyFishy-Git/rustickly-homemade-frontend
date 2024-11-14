import "./adminLayout.css";

import logo from "../assets/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

function AdminLayout() {
    const { user, setUser } = useContext(AdminContext);
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
                {user ? (
                    <>
                        <NavLinks />
                        <NavLink
                            to="/admin/login"
                            id="logout"
                            className={"admin-nav"}
                            onClick={() => setUser(null)}
                        >
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <NavLink
                        to="/admin/login"
                        id="sign-in"
                        className={"admin-nav"}
                    >
                        Log In
                    </NavLink>
                )}
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
                <NavLink to="/admin/login">
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
