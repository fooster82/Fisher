import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'


export const Header = () => {
    return (
        <nav className='nav-bar'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/gigs">Gigs</NavLink>
        </nav>
    )
};