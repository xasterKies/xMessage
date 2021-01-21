import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
        <div className="login__logo">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt=""/>
            <h1>xMessage</h1>
        </div>

        <Button>Sign In</Button>
        </div>
    )
}

export default Login
