import "./appLayouts.css";

import Logo from "../assets/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
    // set state
    const [click, setClick] = useState(false);

    // function to close menu in mobile mode
    const closeMenu = () => {
        setClick(false);
    };

    const NavLinks = () => {
        return (
            <div className="client-links">
                <NavLink
                    to="/"
                    className={"client-nav m-plus-rounded-1c-regular"}
                    onClick={() => closeMenu()}
                >
                    Home
                </NavLink>
                <NavLink
                    to="about"
                    className={"client-nav m-plus-rounded-1c-regular"}
                    onClick={() => closeMenu()}
                >
                    About
                </NavLink>
                <NavLink
                    to="portfolio"
                    className={"client-nav m-plus-rounded-1c-regular"}
                    onClick={() => closeMenu()}
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="quote"
                    className={"client-nav m-plus-rounded-1c-regular"}
                    onClick={() => closeMenu()}
                >
                    Request a Quote!
                </NavLink>
            </div>
        );
    };

    return (
        <>
            {/* small desktop layout */}
            <header className="client-desktop-nav">
                {/* company logo */}
                <Logo />
                {/* show nav links & logout if there is a user logged in,
                    show only a login button if there is no user logged in */}
                <NavLinks />
            </header>

            {/* mobile layout */}
            <header className="client-mobile-nav">
                {/* company logo */}
                <Logo />
                {/* hamburger menu */}
                {(click ? (
                <FontAwesomeIcon
                    icon={faXmark}
                    className="menu-icon"
                    onClick={() => setClick(!click)}
                />
                ) : (
                <FontAwesomeIcon
                    icon={faBars}
                    className="menu-icon"
                    onClick={() => setClick(!click)}
                />
                ))}
                {/* menu */}
                {click && <NavLinks />}
            </header>
            <Outlet />
        </>
    );
}

export default AppLayout;
