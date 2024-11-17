import "./adminLogin.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../contexts/AdminContext";

function AdminLogin() {
    // set useState variables
    const [errorMessage, setErrorMessage] = useState("");
    const [error, isError] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AdminContext);
    const nav = useNavigate();

    const handleToken = (data) => {
        if (data.token) {
            // create user variable
            const user = data.user;
            // add token to user
            user.token = data.token;

            // set cookie to store token (or would it be better to store all data)
            document.cookie = `token=${user.token}`;
            // add userContext to set
            setUser(user);

            // navigate to admin page
            nav("/admin/home");
        } else {
            //TEST LOG
            console.log(data.message);
            // empty password field
            document.getElementById("password-input").value = "";
            // display error message for user
            setErrorMessage(data.message);
            isError(true)
        }
    };

    const handleLogin = () => {
        // set error message if username or password are empty
        if (!email || !password) {
            setErrorMessage("Please enter valid email or password");
            document.getElementById("password-input").value = "";
        } else {
            // POST fetch from login endpoint
            fetch("http://localhost:4000/api/login", {
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
                    console.warn(err);
                    document.getElementById("password-input").value = "";
                    setErrorMessage("Server error, please try again.");
                });
        }
    };

    return (
        <main className="admin-main">
            <div className="auth-inputs">
                <div className="email">
                    <label htmlFor="email-input" className="input-text m-plus-rounded-1c-regular">
                        Email:
                    </label>
                    <input
                        type="text"
                        placeholder="email"
                        id="email-input"
                        className="bubble"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password-input" className="input-text m-plus-rounded-1c-regular">
                        Password:
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        id="password-input"
                        className="bubble"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleLogin();
                        }}
                    />
                </div>
                <button className="auth-button bubble m-plus-rounded-1c-regular" onClick={handleLogin}>
                    Log In
                </button>
                {error && <div className="auth-warning m-plus-rounded-1c-regular">{errorMessage}</div>}
            </div>
        </main>
    );
}

export default AdminLogin;
