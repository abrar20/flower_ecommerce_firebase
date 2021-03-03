import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import FormInput from '../forms/FormInput/index';
import {signUpUserStart} from '../../redux/User/user.actions';
import Button from '../forms/Button/index';
import AuthWrapper from '../AuthWrapper/index';

import './style.scss';
import Spinner from '../Spinner/Spinner';


const mapState= ({user})=>({
    currentUser: user.currentUser,
    userErr: user.userErr,
    loading: user.loading
});
const Signup =(props)=>{
    const dispatch =useDispatch();
    const history=useHistory();
    const {currentUser,userErr,loading} =useSelector(mapState);
    
    const [displayName,setDisplayName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [errors,setErrors]=useState(null);

    useEffect(()=>{
        if(currentUser){
            reset();
            history.push('/');
        }
    },[currentUser]);

    useEffect(()=>{
        if(userErr !== null){
            setErrors(userErr);
        }
    },[userErr]);

    const reset =()=>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }
    const handleFormSubmit = event =>{
        event.preventDefault();
        dispatch(signUpUserStart({displayName, email, password, confirmPassword}));
        
    }
    
    const configAuthWrapper ={
        headline1:'Register',
        headline2:'Login',
        path:'/login'
    };
        if (loading){
            return <Spinner/>;
        }

        return (
            <AuthWrapper {...configAuthWrapper}>
                    
                    <div className="formWrap">
                    {errors?(
                        <ul>
                            <li>
                                * {errors}
                            </li>
                        </ul>
                    ): null}
                    <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e=> setDisplayName(e.target.value)}
                        />
                        <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                        />
                        <p className="hint">* Password must be 6 characters or more</p>
                        <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e=> setPassword(e.target.value)}
                        />
                        <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e=> setConfirmPassword(e.target.value)}
                        />
                        <Button className="btn third" type="submit">
                            Register
                        </Button>
                    </form>
                    </div>
                    </AuthWrapper>
        )
    
}
export default Signup; 