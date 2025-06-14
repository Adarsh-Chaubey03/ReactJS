import React, {useState, useContext} from 'react'

function Login() {
    const[username,setUsername]=useState('')
    onst[password,setPassword]=useState('')
    const handleSubmit = () =>{}
    return (
        <div>
            <h2>Login</h2>
        <input type='text' placeholder='username'/>
        <input type='text' placeholder='password '/>
        </div>
    )
}

export default Login
