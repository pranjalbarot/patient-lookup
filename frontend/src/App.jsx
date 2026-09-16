import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import PatientList from "./pages/PatientList";
import PatientDetails from "./pages/PatientDetails";
import PatientForm from "./pages/PatientForm";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {

    return (
        <AuthProvider>

            <BrowserRouter>

                <Routes>

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/patients"
                                replace
                            />
                        }
                    />

                    <Route
                        path="/patients"
                        element={
                            <ProtectedRoute>
                                <Navbar />
                                <PatientList />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/patients/new"
                        element={
                            <ProtectedRoute>
                                <Navbar />
                                <PatientForm />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/patients/:id"
                        element={
                            <ProtectedRoute>
                                <Navbar />
                                <PatientDetails />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/patients/:id/edit"
                        element={
                            <ProtectedRoute>
                                <Navbar />
                                <PatientForm />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </BrowserRouter>

        </AuthProvider>
    );
}

export default App;