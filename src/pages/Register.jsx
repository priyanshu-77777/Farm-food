import "./Register.css";

function Register() {
    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Create Account</h1>
                <p>
                    Join Farm Food and explore healthy Himalayan products.
                </p>

                <form>
                    <input
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;