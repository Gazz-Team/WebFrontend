import React from 'react'
import './SignUpForm.css'

const SignUpForm = () => {
    return (
        <div className="SignUpForm">
            <form action="POST">
                <div className="form-control">
                    <label htmlFor="fullname">Fullname</label>
                    <input name="fullname" type="text"/>
                </div>
                <div className="form-control"> 
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"/>
                </div>
                <div className="form-control">
                    <label htmlFor="c-password">Confirm Password</label>
                    <input name="c-password" type="password"/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
