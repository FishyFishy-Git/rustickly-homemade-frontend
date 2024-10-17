import './login.css'
import { useState } from 'react'

function Login() {
    // set useState variables
    const [errorMessage, setErrorMessage] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleToken = (data) => {
        if (data.token) {
            // TODO: cookies!
            const newUser = data.user
            newUser.token = data.token
            console.log(data)
        } else {
            setErrorMessage(data.message)
        }
    }

    const handleLogin = () => {
        // set errormessage if username or password are empty 
        if (!username || !password) {
            setErrorMessage("Please enter valid username or password")
        } else {
            //TEST-LOG
            console.log(`login hit | u: ${username} p: ${password}`);
            // POST fetch from login endpoint
            fetch('localhost:4000/login', {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { "Content-Type": "application/json" },
            })
                // turn to json
                .then((res) => res.json())
                // pass data to handle token
                .then((data) => handleToken(data))
                .catch((err) => {
                    console.warn(err)
                    setErrorMessage("Server error, please try again")
                })
        }
    }

    return (<>
        <main>
            <div className="auth-inputs">
                <div className="username">
                    <label htmlFor="username-input" className="input-text">Username:</label>
                    <input type="text" placeholder="username" id="username-input" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="password-input" className="input-text">Password:</label>
                    <input type="text" placeholder="password" id="password-input" onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="auth-button" onClick={handleLogin}>Log In</button>
                <p className="authWarning">{errorMessage}</p>
            </div>
        </main>
    </>)
}

export default Login
