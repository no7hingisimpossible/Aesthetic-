import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='nav-container sticky-top'>
            <div>
            <Link to='/'><span className='logo-name'>AESTHETIC</span></Link>
            </div>
            <div>
                <Link to='/blogs' >BLOGS</Link>
                {user ? <button onClick={()=> signOut(auth)} className='signup-btn'>SignOut</button> :<button className='signup-btn'><Link to='/signup' >SIGNUP</Link></button>}
            </div>
        </div>
    );
};

export default Header;