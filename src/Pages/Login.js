import './login.css'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let errorMessage = ""
    const handleLogin = () => {
        console.log('login hit');
        
    }
    return (<>
        <div className="auth-inputs">
            <div className="username">
                <label htmlFor="username-input">Username:</label>
                <input type="text" placeholder="username" id="username-input" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="password">
                <label htmlFor="password-input">Password:</label>
                <input type="text" placeholder="password" id="password-input" onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="auth-button" onClick={handleLogin}>Log In</button>
            <p className="authWarning">{errorMessage}</p>
        </div>
    </>)
}

export default Login
