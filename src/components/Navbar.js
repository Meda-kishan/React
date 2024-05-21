import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <>
            <nav>
                <div className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='dark' ? '#000' : '#030637'}`} >
                    <div>
                    <ul>
                        <li><a href="" className={`text-${props.mode==='light'?'dark':'light'}`}>{props.nav_element1}</a></li>
                        <li><a href="" className={`text-${props.mode==='light'?'dark':'light'}`}>{props.nav_element2}</a></li>
                        <li><a href="" className={`text-${props.mode==='light'?'dark':'light'}`}>{props.nav_element3}</a></li>
                        <li><a href="" className={`text-${props.mode==='light'?'dark':'light'}`}>{props.nav_element4}</a></li>
                    </ul>
                    </div>

                    
                    <div className={`custom-control custom-switch  text-${props.mode==='light'?'dark':'light'}`}>
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
                        <label class="custom-control-label" for="customSwitch1">Enable DarkMode</label>
                    </div>

                </div>
            </nav>
        </>
    )
};


Navbar.prototype = {
    nav_element1: PropTypes.string,
    nav_element2: PropTypes.string,
    nav_element3: PropTypes.string,
    nav_element4: PropTypes.string
}

Navbar.defaultProps = {
    nav_element1: "default",
    nav_element2: "default",
    nav_element3: "default",
    nav_element4: "default"
}
