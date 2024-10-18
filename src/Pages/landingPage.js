import React from "react";
import logo from '../assests/Rustickly_2.png'
import '../layout/landingPage.css'
import { NavLink, Outlet } from "react-router-dom";

function LandingPage() {
    return(
        <div className='main-container'>
        <div className='navigation-bar'>
          <section>
            <img id="logo" src={logo} alt="logo of the bakery Rustickly home made" />
          </section>
            <div id="navlinksLP">
              <p className="linksLP" id='portfolio'><NavLink>Portfolio</NavLink></p>
              <hr />
              <p className="linksLP" id='about-us'><NavLink>About</NavLink></p>
              <hr />
              <p className="linksLP" id='qoute'><NavLink>Request a quote!</NavLink></p>
            </div>
        </div>
  
        <div className='logo-header'>
  
        </div>
  
        <div className='content-block'>
  
        </div>
  
        <div className='footer-block'>
          <div className='social-placeholder'>
  
          </div>
        </div>
        <Outlet />
      </div>
    );
};

export default LandingPage;
