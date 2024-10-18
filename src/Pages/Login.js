import './login.css'
import { useState } from 'react'

function Login() {
    // set useState variables
    const [errorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleToken = (data) => {
        if (data.token) {
            // TODO: cookies!
            const user = data.user
            user.token = data.token
            console.log(data)
        } else {
            console.log(data.message);
            setErrorMessage(data.message)
        }
    }

    const handleLogin = () => {
        // set errormessage if username or password are empty 
        if (!email || !password) {
            setErrorMessage("Please enter valid email or password")
        } else {
            // POST fetch from login endpoint
            fetch('http://localhost:4000/api/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
            })
                // turn to json
                .then((res) => res.json())
                // pass data to handle token
                .then((data) => handleToken(data))
                // post error message in colsole and on site
                .catch((err) => {
                    console.warn(err)
                    setErrorMessage("Server error, please try again.")
                })
        }
    }

    return (<>
        <main>
            <div className="auth-inputs">
                <div className="email">
                    <label htmlFor="email-input" className="input-text">Email:</label>
                    <input type="text" placeholder="email" id="email-input" onChange={e => setEmail(e.target.value)} />
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
