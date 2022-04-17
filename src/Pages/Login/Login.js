import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h3>this is Login</h3>
            <form className='form'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="2" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="3" />
                <p className=''>Already have an account? <span style={{ cursor: 'pointer' }} className='text-danger'>Please Login</span></p>
            </form>
        </div>
    );
};

export default Login;