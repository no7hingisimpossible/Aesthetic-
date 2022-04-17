import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';
import './GoogleSignIn.css'

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    useEffect(()=>{
       if(user){
        navigate('/')
       }
        
    },[user])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='line-container'>
                <div className='left-line'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='right-line'></div>
            </div>
            <div className='d-flex align-items-center'>
                <button onClick={() => signInWithGoogle()} className=' submit-btn  w-50 mx-auto'>
                    <img className='me-2' src={google} alt="" />
                    Continue with Google
                </button>
                {error?.message && <p>{error.message}</p>}
            </div>
        </div>
    );
};

export default GoogleSignIn;