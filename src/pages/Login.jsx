import "./Login.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Handle Google OAuth token
    useEffect(() => {
        const token = searchParams.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/dashboard");
        }
    }, [searchParams, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Login failed");
                return;
            }

            // Save JWT
            localStorage.setItem("token", data.token);

            setMessage("Login successful!");

            navigate("/dashboard");

        } catch (error) {
            console.error(error);
            setMessage("Unable to connect to server");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href =
            "http://localhost:5000/api/auth/google";
    };

    return (
        <div className="login-container">
            <div className="login-card">

                <h1>Login</h1>

                <p>
                    Sign in to access Farm Food services.
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <button
    type="button"
    onClick={() => {
        window.location.href = "http://localhost:5000/api/auth/google";
    }}
>
    Sign in with Google
</button>
                {message && (
                    <p>{message}</p>
                )}

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;