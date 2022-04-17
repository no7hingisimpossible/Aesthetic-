import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
      const [userInfo, setUserInfo] = useState({
        email:"", 
        password:""
    })
    const [errors, setErrors] = useState({
        emailError:"", 
        passwordError:""
    
    })  

    const emailHandler = event =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)
        
        if(validEmail){
            setUserInfo({...userInfo, email: event.target.value})
            setErrors({...errors, emailError:""})
        }else{
            setErrors({...errors, emailError:"Invalid Email"})
            setUserInfo({...userInfo, email:""})
        }
        
    }

    const passwordHandler = event =>{
        const passwordRegex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{6,36}$/gmu
        const validPassword = passwordRegex.test(event.target.value)
        if(validPassword){
            setUserInfo({...userInfo, password: event.target.value})
            setErrors({...errors, passwordError: ""})
        }else{
            setErrors({...errors, passwordError: 'Invalid Password'})
            setUserInfo({...userInfo, password: ""})
        }
        
    }

    const signIn = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
        if(userInfo.email === ''){
            setUserInfo({...userInfo, email: event.target.value})
            setErrors({...errors, emailError:"Email Required"})
        }
        if(userInfo.password === ''){
            setUserInfo({...userInfo, password: event.target.value})
            setErrors({...errors, passwordError: "Password Required"})
        }
    }

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            navigate(from, {replace: true})
            toast.success('Welcome', {id: 'login'})
        }
    },[user])

    return (
        <div>
            <h3 className='text-center mt-3'>LOGIN</h3>
            <form onSubmit={signIn} className='form'>
                <label htmlFor="email">Email</label>
                <input onChange={emailHandler} type="email" name="email" id="2" />
                {errors.emailError && <p className='text-danger fw-bold'>{errors.emailError}</p>}

                <label htmlFor="password">Password</label>
                <input onChange={passwordHandler} type="password" name="password" id="3" />
                {errors.passwordError && <p className='text-danger fw-bold'>{errors.passwordError}</p>}
                <input className='submit-btn' type="submit" value="LOGIN" />
                
                <p className='fw-bold mt-2'>New to Aesthetic? <Link to='/signup' className='text-secondary fw-normal'>Please SignUp</Link></p>
                {error?.message.includes('Firebase: Error (auth/invalid-email).') && <p className='text-danger fw-bold'>Invalid User</p>}
            </form>
            <GoogleSignIn></GoogleSignIn>
        </div>
    );
};

export default Login;