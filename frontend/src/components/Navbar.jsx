import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const {
        username,
        role,
        logout
    } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {

        logout();
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-dark bg-dark">

            <div className="container">

                <Link
                    to="/patients"
                    className="navbar-brand"
                >
                    Patient Lookup
                </Link>

                <div className="d-flex align-items-center">

                    <span className="text-white me-3">
                        {username} ({role})
                    </span>

                    <button
                        className="btn btn-outline-light"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;