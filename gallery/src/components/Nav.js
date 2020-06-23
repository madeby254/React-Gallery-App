//import React
import React from "react";
//import NavLink from react router
import { NavLink } from 'react-router-dom';

//Nav function create navigation for default results
const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/search/bird'>Bird</NavLink>
            </li>
            <li>
                <NavLink to='/search/cat'>Cat</NavLink>
            </li>
            <li>
                <NavLink to='/search/horse'>Horse</NavLink>
            </li>
            <li>
                <NavLink to='/search/cow'>Cow</NavLink>
            </li>
        </ul>
    </nav>

);
//export Nav Function
export default Nav;