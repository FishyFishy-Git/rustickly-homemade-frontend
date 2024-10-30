import React from "react";
import '../layout/about.css'; 
import { NavLink } from "react-router-dom";
import logo from '../assests/Rustickly_2.png'
import Border from "../components/Border";
import BorderTL from "../components/BorderTL";
import BorderRB from "../components/BorderRB";
import BorderLB from "../components/BorderLB";

function About() {
    return(
        <div className="main-Container-about">
        <div className='navigation-bar-about'>
          <section>
            <img id="logo" src={logo} alt="logo of the bakery Rustickly home made" />
          </section>
            <div id="navlinksAbout">
              <p className="linksA" id="home"><NavLink to="/">Home</NavLink></p>
              <hr />
              <p className="linksA" id='portfolio'><NavLink to="portfolio">Portfolio</NavLink></p>
              <hr />
              <p className="linksA" id='qoute'><NavLink to="qoute">Request a quote!</NavLink></p>
            </div>
        </div>

            <div className="title-bar-about">
              <Border></Border>
              <BorderTL></BorderTL>
              <BorderRB></BorderRB>
              <BorderLB></BorderLB>
                <h2 id="title-text">About me</h2>
            </div>

            <div className="content-about">
                <p id="about-us">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi ullam cumque nesciunt delectus deleniti non sint in temporibus sed eaque, 
                    incidunt autem, quae inventore, tempora debitis similique. Neque, atque odio?</p>
            </div>
        </div>
    );
};

export default About;