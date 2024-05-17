import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props){
    return (
        <>
        <nav>
            <div className="nav-elements">
                <ul>
                    <li> <a href="">{props.nav_element1}</a></li>
                    <li><a href="">{props.nav_element2}</a></li>
                    <li><a href="">{props.nav_element3}</a></li>
                    <li><a href="">{props.nav_element4}</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
};


Navbar.prototype={
    nav_element1 : PropTypes.string,
    nav_element2 : PropTypes.string,
    nav_element3 : PropTypes.string,
    nav_element4 : PropTypes.string
}

Navbar.defaultProps={
    nav_element1 : "default",
    nav_element2 : "default",
    nav_element3 : "default",
    nav_element4 : "default"
}
