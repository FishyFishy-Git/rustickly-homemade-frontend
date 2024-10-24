import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    // set useState variables
    const [errorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const handleToken = (data) => {
        if (data.token) {
            // create user variable
            const user = data.user
            // add token to user
            user.token = data.token
            // set cookie to store token (or would it be better to store all data)

            //TEST LOG
            console.log(data)

            // navigate to admin page
            nav("/admin")
        } else {
            //TEST LOG
            console.log(data.message)
            // empty password field
            document.getElementById("password-input").value = ""
            // display error message for user
            setErrorMessage(data.message)
        }
    }

    const handleLogin = () => {
        // set error message if username or password are empty 
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
                // post error message in console and on site
                .catch((err) => {
                    console.warn(err)
                    setErrorMessage("Server error, please try again.")
                })
        }
    }

    return (<main>
        <div className="auth-inputs">
            <div className="email">
                <label htmlFor="email-input" className="input-text">Email:</label>
                <input
                    type="text"
                    placeholder="email"
                    id="email-input"
                    className="bubble"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="password">
                <label htmlFor="password-input" className="input-text">Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    id="password-input"
                    className="bubble"
                    onChange={e => {
                        console.log(e.target.key)
                        if (e.key === 'Enter') {
                            console.log('Enter pressed')
                        } else {
                            setPassword(e.target.value)
                        }
                    }}
                />
            </div>
            <button className="auth-button bubble" onClick={handleLogin}>Log In</button>
            <p className="auth-warning">{errorMessage}</p>
        </div>
    </main>)
}

export default AdminLogin
