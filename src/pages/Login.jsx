
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>
                <p>
                    Sign in to access Farm Food services.
                </p>
                <form>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button type="submit">
                        Login
                    </button>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
         
        </div>
    );
}

export default Login;