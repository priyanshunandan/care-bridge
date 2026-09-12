import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import type { ReactNode } from "react";

import type { User } from "../types";

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    signup: (
        name: string,
        email: string,
        password: string
    ) => { success: boolean; message: string };
    logout: () => void;
    updateUser: (name: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("carebridgeUser");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (email: string, password: string) => {
        const savedAccount = localStorage.getItem("carebridgeAccount");

        if (!savedAccount) {
            return false;
        }

        const account = JSON.parse(savedAccount);

        if (
            account.email === email &&
            account.password === password
        ) {
            const loggedInUser: User = {
                id: "1",
                name: email.split("@")[0],
                email: email,
                role: "patient",
            };

            setUser(loggedInUser);

            localStorage.setItem(
                "carebridgeUser",
                JSON.stringify(loggedInUser)
            );

            return true;
        }

        return false;
    };

    const signup = (
        name: string,
        email: string,
        password: string
    ) => {
        const account = {
            name,
            email,
            password,
        };

        localStorage.setItem(
            "carebridgeAccount",
            JSON.stringify(account)
        );

        const newUser: User = {
            id: Date.now().toString(),
            name: name,
            email: email,
            role: "patient",
        };

        setUser(newUser);

        localStorage.setItem(
            "carebridgeUser",
            JSON.stringify(newUser)
        );

        return {
            success: true,
            message: "Account created successfully!",
        };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("carebridgeUser");
    };

    const updateUser = (name: string, email: string) => {
        if (!user) return;

        const updatedUser: User = {
            id: user.id,
            name: name,
            email: email,
            role: user.role,
        };

        localStorage.setItem(
            "carebridgeUser",
            JSON.stringify(updatedUser)
        );

        const savedAccount = localStorage.getItem(
            "carebridgeAccount"
        );

        if (savedAccount) {
            const account = JSON.parse(savedAccount);

            localStorage.setItem(
                "carebridgeAccount",
                JSON.stringify({
                    ...account,
                    name,
                    email,
                })
            );
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                signup,
                logout,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}