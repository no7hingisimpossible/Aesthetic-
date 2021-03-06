import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
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
            <Link className='link' to='/'><span className='logo-name'>AESTHETIC</span></Link>
            </div>
            <div>
                <Link className='link' to='/blogs' >BLOGS</Link>
                <Link className='link' to='/aboutus'>ABOUT US</Link>
                {user ? <button onClick={()=> signOut(auth) } className=''>Signout</button> :<button className='signup-btn'><Link to='/login' >LOGIN</Link></button>}
            </div>
        </div>
    );
};

export default Header;