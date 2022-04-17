import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name:"", 
        email:"", 
        password:"", 
        confirmPassword:""
    })
    const [errors, setErrors] = useState({
        emailError:"", 
        passwordError:"", 
        confirmPasswordError:""
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true });

    const nameHandler = event =>{
        setUserInfo({...userInfo, name: event.target.value})
    }
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
    const confirmPassword = event =>{
        if(userInfo.password === event.target.value){
            setUserInfo({...userInfo, confirmPassword: event.target.value})
            setErrors({...errors, confirmPasswordError: ""})
        }else{
            setErrors({...errors, confirmPasswordError: 'Password did not match'})
            setUserInfo({...userInfo, confirmPassword: ""})
        }
        
    }
    const createUser = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

    }
    
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])


    return (
        <div className=''>
            <h2 className='text-center text-primary mt-3'>Please Register</h2>
            <form onSubmit={createUser} className='form'>
                <label htmlFor="name">Name</label>
                <input onChange={nameHandler} type="text" name="name" id="1" />

                <label htmlFor="email">Email</label>
                <input onChange={emailHandler} type="email" name="email" id="2" />
                <p className='text-danger'>{errors.emailError}</p>
                <label htmlFor="password">Password</label>
                <input onChange={passwordHandler} type="password" name="password" id="3" />
                <p className='text-danger'>{errors.passwordError}</p>
                <label htmlFor="password">Confirm Password</label>
                <input onChange={confirmPassword} type="password" name="password" id="4" />
                <p className='text-danger'>{errors.confirmPasswordError}</p>
                <input type="submit" value="SigUp" />
                

                <p className=''>Already have an account? <span style={{ cursor: 'pointer' }} className='text-danger'>Please Login</span></p>
            </form> 
            
        </div>
    );
};

export default SignUp;