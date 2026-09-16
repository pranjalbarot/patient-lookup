import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        try {
            const response = await api.post("/auth/login", {
                username,
                password
            });

            login(response.data.token);
            navigate("/patients");
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid username or password.");
        }
    }

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">

            <div className="col-11 col-sm-8 col-md-5 col-lg-4">

                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-body p-4 p-md-5">

                        <h2 className="text-center fw-bold text-primary mb-4">
                            Patient Lookup
                        </h2>

                        {error && (
                            <div className="alert alert-danger py-2">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="text-end mb-3">
                                <a href="#" className="text-decoration-none">
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-100 rounded-3"
                            >
                                Sign In
                            </button>

                        </form>

                        <div className="text-center mt-4">
                            Don't have an account?{" "}
                            <a href="#" className="text-primary text-decoration-none fw-semibold">
                                Sign Up
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;