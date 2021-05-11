import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-scroll";
import logo from "../../images/logo.png";

const Navbar = () => {

    const [nav, setnav] = useState (false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav (true);

        }else {
            setnav (false);
        }
        
    }

    window.addEventListener ("scroll", changeBackground);

    return (
        <nav className = {nav ? "nav active" : "nav"}>
        
        <Link to = "#" className = "logo">
            <img src = {logo} alt = ''/>
        </Link>
        
        <input className = "menu-btn" type = "checkbox" id = "menu-btn"/>
        <label className = "menu-icon" for = "menu-btn">
            <span className = "nav-icon"></span>
        </label>

    <ul className = "menu" >
        <li><Link to = "/home"> Home </Link></li>
        <li><Link to = "/nutrition"> Nutrition </Link></li>
        <li><Link to = "/fitness"> Fitness </Link></li>
        <li><Link to = "/stats"> My Stats </Link></li>
        <li><Link to = "/journal"> Journal </Link></li>
        <li><Link to = "/contact"> Contact </Link></li>
    </ul>

    </nav>

    )
}

export default Navbar;



    