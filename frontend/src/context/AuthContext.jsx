
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Read username and role from JWT payload
const getUserFromToken = (token) => {
    if (!token) {
        return {
            username: null,
            role: null
        };
    }

    try {
        const payload = JSON.parse(
            atob(token.split(".")[1])
        );

        return {
            username: payload.sub || null,
            role: payload.role || null
        };

    } catch (error) {
        console.error("Unable to read JWT:", error);

        return {
            username: null,
            role: null
        };
    }
};

export function AuthProvider({ children }) {

    const savedToken = localStorage.getItem("token");

    const user = getUserFromToken(savedToken);

    const [token, setToken] = useState(savedToken);
    const [username, setUsername] = useState(user.username);
    const [role, setRole] = useState(user.role);

    const login = (newToken) => {

        localStorage.setItem("token", newToken);

        const user = getUserFromToken(newToken);

        setToken(newToken);
        setUsername(user.username);
        setRole(user.role);
    };

    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);
        setUsername(null);
        setRole(null);
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider
            value={{
                token,
                username,
                role,
                login,
                logout,
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
