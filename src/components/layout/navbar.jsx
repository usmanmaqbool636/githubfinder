import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
const Navbar = ({ icon, title }) => {
    return (
        <div className="navbar bg-purple">
            <h1 className="bonus anim" style={{ color: "#c9c6cf" }} >
                 <i className={icon} style={{ paddingRight: '5px' }}></i>
                {title}
            </h1>
            <ul>
                <li >
                    <Link to="/" >home</Link>
                </li>

                <li >
                    <Link to="/about" >about</Link>
                </li>
            </ul>
        </div>
    );
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: "fa fa-shield"
}
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
}

export default Navbar;