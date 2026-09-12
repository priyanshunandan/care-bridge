import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/care-ai": "CareBridge AI",
    "/prescriptions": "Prescriptions",
    "/medical-records": "Medical Records",
    "/medications": "Medications",
    "/wellness": "Mental Wellness",
    "/appointments": "Appointments",
    "/nearby": "Nearby Healthcare",
    "/period-tracker": "Period Tracker",
    "/settings": "Settings",
};

function Topbar() {
    const location = useLocation();
    const { darkMode, toggleTheme } = useTheme();
    const { user } = useAuth();

    const title =
        titles[location.pathname] || "Dashboard";

    return (
        <header className="topbar">
            <div className="topbar-title">
                <span>Overview</span>
                <h2>{title}</h2>
            </div>

            <div className="topbar-actions">
                <button
                    className="topbar-icon"
                    onClick={toggleTheme}
                >
                    <i
                        className={
                            darkMode
                                ? "fa-solid fa-sun"
                                : "fa-solid fa-moon"
                        }
                    />
                </button>

                <button className="topbar-icon notification-button">
                    <i className="fa-regular fa-bell" />
                    <span />
                </button>

                <div className="avatar">
                    {user?.name?.charAt(0).toUpperCase() ||
                        "U"}
                </div>
            </div>
        </header>
    );
}

export default Topbar;