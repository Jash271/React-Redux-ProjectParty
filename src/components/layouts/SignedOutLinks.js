import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
const SignedOutLinks = () =>{
        return(
            <ul className='right'>
                <li><NavLink to ='/signUp'>SignUp</NavLink></li>
                <li><NavLink to ='/signIn'>Login</NavLink></li>
                
            </ul>
        )
}
export default SignedOutLinks