import './Styles/Navbar.css';
import { useState, useRef } from 'react';
import logo from '../../images/logo.png'

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar__title-div">
                <img src={logo} alt='' className="navbar_site-logo-div__logo"/>
                <h2>ChatterBox</h2>
            </div>
        </nav>
    )
}
export default Navbar;