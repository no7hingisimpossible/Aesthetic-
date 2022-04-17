import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-container sticky-top'>
            <div>
            <Link to='/'><span className='logo-name'>AESTHETIC</span></Link>
            </div>
            <div>
                <Link to='/blogs' >BLOGS</Link>
                <button className='signup-btn'><Link to='/signup' >SIGNUP</Link></button>
            </div>
        </div>
    );
};

export default Header;