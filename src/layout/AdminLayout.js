import "./adminLayout.css";

import logo from "../assets/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faArrowRightFromBracket,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

function AdminLayout() {
    // set contexts and states
    const { user, setUser } = useContext(AdminContext);
    const [click, setClick] = useState(false);

    // function to close menu in mobile mode
    const closeMenu = () => {
        setClick(false);
    };

    // delete user context and token cookie
    const handleLogout = () => {
        setUser(null);
        document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;";
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
                {/* company logo */}
                <img
                    src={logo}
                    alt="Rustickly Homemade's logo"
                    id="admin-logo"
                />

                {/* show nav links & logout if there is a user logged in,
                    show only a login button if there is no user logged in */}
                {user ? (
                    <>
                        <NavLinks />
                        <NavLink
                            to="/admin/login"
                            id="logout"
                            className="admin-nav"
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <NavLink
                        to="/admin/login"
                        id="sign-in"
                        className="admin-nav"
                    >
                        Log In
                    </NavLink>
                )}
            </header>

            {/* mobile layout */}
            <header className="mobile-nav">
                {/* hamburger menu */}
                {user &&
                    (click ? (
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="mobile-icon"
                            onClick={() => setClick(!click)}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="mobile-icon"
                            onClick={() => setClick(!click)}
                        />
                    ))}

                {/* company logo */}
                <img
                    src={logo}
                    alt="Rustickly Homemade's logo"
                    id="admin-logo"
                />

                {/* logout button */}
                {user ? (
                    <NavLink to="/admin/login" onClick={() => handleLogout()}>
                        <FontAwesomeIcon
                            icon={faArrowRightFromBracket}
                            className="mobile-icon"
                        />
                    </NavLink>
                ) : (
                    <NavLink to="/admin/login">
                        <FontAwesomeIcon
                            icon={faRightToBracket}
                            className="mobile-icon"
                        />
                    </NavLink>
                )}

                {/* menu */}
                {click && <NavLinks />}
            </header>
            <Outlet />
        </>
    );
}

export default AdminLayout;
