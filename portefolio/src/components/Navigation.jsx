import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ onNavClick }) {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#F5E3E0",
    };

    return (
        <nav className="navigation-bar">
            <NavLink
                className='nav-links'
                to="/"
                style={({ isActive }) => isActive ? activeStyles : null}
                onClick={() => onNavClick('Home')}
            >
                Home
            </NavLink>
            <NavLink
                className='nav-links'
                to="/About"
                style={({ isActive }) => isActive ? activeStyles : null}
                onClick={() => onNavClick('About')}
            >
                About
            </NavLink>
            <NavLink
                className='nav-links'
                to="/Works"
                style={({ isActive }) => isActive ? activeStyles : null}
                onClick={() => onNavClick('Works')}
            >
                Works
            </NavLink>
        </nav>
    );
}

export default Navigation;