import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const {pathname} = useLocation();
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div 
            style={
                pathname.includes() ? {display: "none"} : { display: "flex"}
            }
        className='nav-container sticky-top'>
            <div>
            <NavLink className='link' to='/'><span className='logo-name'>AESTHETIC</span></NavLink>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? "active-link" : "link"} to='/blogs' >BLOGS</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-link" : "link"} to='/aboutus'>ABOUT US</NavLink>
                {user ? 
                <NavLink onClick={()=> signOut(auth) } className=''>Signout</NavLink> :
                <NavLink className={({isActive})=> isActive ? "active-link" : "link"} to='/login' >LOGIN</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;