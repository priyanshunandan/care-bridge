import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<
    ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem(
            "carebridgeTheme"
        );

        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode((previous) => {
            const newTheme = !previous;

            if (newTheme) {
                document.body.classList.add("dark");
                localStorage.setItem(
                    "carebridgeTheme",
                    "dark"
                );
            } else {
                document.body.classList.remove("dark");
                localStorage.setItem(
                    "carebridgeTheme",
                    "light"
                );
            }

            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}