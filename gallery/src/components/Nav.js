import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/search/meerkat'>Meerkat</NavLink>
            </li>
            <li>
                <NavLink to='/search/lion'>Simba</NavLink>
            </li>
            <li>
                <NavLink to='/search/leopard'>leopard</NavLink>
            </li>
            <li>
                <NavLink to='/search/hyena'>Hyena</NavLink>
            </li>
        </ul>
    </nav>

);

export default Nav;