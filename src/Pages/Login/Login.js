import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Login.css'

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
    }

    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])

    return (
        <div>
            <h3>this is Login</h3>
            <form onSubmit={signIn} className='form'>
                <label htmlFor="email">Email</label>
                <input onChange={emailHandler} type="email" name="email" id="2" />

                <label htmlFor="password">Password</label>
                <input onChange={passwordHandler} type="password" name="password" id="3" />

                <input type="submit" value="LOGIN" />
                <p className=''>Already have an account? <span style={{ cursor: 'pointer' }} className='text-danger'>Please Login</span></p>
            </form>
        </div>
    );
};

export default Login;