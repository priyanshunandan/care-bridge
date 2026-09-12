import {
    useState,
} from "react";

import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthPage() {
    const navigate = useNavigate();
    const { login, signup } = useAuth();

    const [isLogin, setIsLogin] = useState(true);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const handleLogin = (event: FormEvent) => {
        event.preventDefault();

        const success = login(
            loginEmail,
            loginPassword
        );

        if (success) {
            navigate("/dashboard");
        } else {
            alert(
                "Invalid email or password. Please create an account first."
            );
        }
    };

    const handleSignup = (event: FormEvent) => {
        event.preventDefault();

        if (signupPassword.length < 6) {
            alert(
                "Password must be at least 6 characters."
            );
            return;
        }

        if (signupPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        signup(
            signupName,
            signupEmail,
            signupPassword
        );

        navigate("/dashboard");
    };

    return (
        <div className="auth-screen">
            <div className="auth-left">
                <div className="brand auth-brand">
                    <div className="brand-icon">
                        <i className="fa-solid fa-heart-pulse" />
                    </div>

                    <span>CareBridge</span>
                </div>

                <div className="auth-content">
                    <div className="auth-badge">
                        <i className="fa-solid fa-shield-heart" />
                        Smart Healthcare Companion
                    </div>

                    <h1>
                        Your health,
                        <span> simplified.</span>
                    </h1>

                    <p>
                        Manage your medicines, appointments,
                        records, wellness and health tracking —
                        all from one place.
                    </p>

                    <div className="auth-features">
                        <div>
                            <i className="fa-solid fa-check" />
                            Smart health dashboard
                        </div>

                        <div>
                            <i className="fa-solid fa-check" />
                            CareBridge AI assistant
                        </div>

                        <div>
                            <i className="fa-solid fa-check" />
                            Wellness & cycle tracking
                        </div>
                    </div>
                </div>
            </div>

            <div className="auth-right">
                <div className="auth-card">
                    <div className="auth-mobile-logo">
                        <div className="brand-icon">
                            <i className="fa-solid fa-heart-pulse" />
                        </div>

                        <h2>CareBridge</h2>
                    </div>

                    <div className="auth-heading">
                        <h2>
                            {isLogin
                                ? "Welcome back"
                                : "Create your account"}
                        </h2>

                        <p>
                            {isLogin
                                ? "Sign in to continue to your health dashboard."
                                : "Start managing your health in one place."}
                        </p>
                    </div>

                    <div className="auth-tabs">
                        <button
                            className={
                                isLogin
                                    ? "auth-tab active"
                                    : "auth-tab"
                            }
                            onClick={() => setIsLogin(true)}
                        >
                            Sign In
                        </button>

                        <button
                            className={
                                !isLogin
                                    ? "auth-tab active"
                                    : "auth-tab"
                            }
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {isLogin ? (
                        <form
                            className="auth-form"
                            onSubmit={handleLogin}
                        >
                            <div className="input-group">
                                <label>Email Address</label>

                                <div className="input-wrapper">
                                    <i className="fa-regular fa-envelope" />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={loginEmail}
                                        onChange={(event) =>
                                            setLoginEmail(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Password</label>

                                <div className="input-wrapper">
                                    <i className="fa-solid fa-lock" />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your password"
                                        value={loginPassword}
                                        onChange={(event) =>
                                            setLoginPassword(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                    >
                                        <i
                                            className={
                                                showPassword
                                                    ? "fa-regular fa-eye-slash"
                                                    : "fa-regular fa-eye"
                                            }
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>

                                <button
                                    type="button"
                                    className="forgot-btn"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="primary-btn auth-submit"
                            >
                                Sign In
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </form>
                    ) : (
                        <form
                            className="auth-form"
                            onSubmit={handleSignup}
                        >
                            <div className="input-group">
                                <label>Full Name</label>

                                <div className="input-wrapper">
                                    <i className="fa-regular fa-user" />

                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        value={signupName}
                                        onChange={(event) =>
                                            setSignupName(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Email Address</label>

                                <div className="input-wrapper">
                                    <i className="fa-regular fa-envelope" />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={signupEmail}
                                        onChange={(event) =>
                                            setSignupEmail(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Password</label>

                                <div className="input-wrapper">
                                    <i className="fa-solid fa-lock" />

                                    <input
                                        type="password"
                                        placeholder="Minimum 6 characters"
                                        value={signupPassword}
                                        onChange={(event) =>
                                            setSignupPassword(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Confirm Password</label>

                                <div className="input-wrapper">
                                    <i className="fa-solid fa-lock" />

                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(event) =>
                                            setConfirmPassword(
                                                event.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <label className="checkbox-label">
                                <input type="checkbox" required />

                                <span>
                                    I agree to the terms and privacy
                                    policy.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="primary-btn auth-submit"
                            >
                                Create Account
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </form>
                    )}

                    <div className="auth-footer">
                        Your health data stays on this device in
                        this frontend demo.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;