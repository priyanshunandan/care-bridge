import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "fa-house",
    },
    {
        name: "CareBridge AI",
        path: "/care-ai",
        icon: "fa-robot",
    },
    {
        name: "Prescriptions",
        path: "/prescriptions",
        icon: "fa-file-prescription",
    },
    {
        name: "Medical Records",
        path: "/medical-records",
        icon: "fa-folder-open",
    },
    {
        name: "Medications",
        path: "/medications",
        icon: "fa-pills",
    },
    {
        name: "Mental Wellness",
        path: "/wellness",
        icon: "fa-face-smile",
    },
    {
        name: "Appointments",
        path: "/appointments",
        icon: "fa-calendar-check",
    },
    {
        name: "Nearby",
        path: "/nearby",
        icon: "fa-location-dot",
    },
    {
        name: "Period Tracker",
        path: "/period-tracker",
        icon: "fa-person-dress",
    },
];

function Sidebar() {
    const { user, logout } = useAuth();

    const initial =
        user?.name?.charAt(0).toUpperCase() || "U";

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-icon">
                    <i className="fa-solid fa-heart-pulse" />
                </div>

                <div>
                    <strong>CareBridge</strong>
                    <small>Health Companion</small>
                </div>
            </div>

            <div className="sidebar-section-title">
                MAIN
            </div>

            <nav className="navigation">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <i
                            className={`fa-solid ${item.icon}`}
                        />

                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-bottom">
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <i className="fa-solid fa-gear" />
                    <span>Settings</span>
                </NavLink>

                <div className="sidebar-user">
                    <div className="avatar">
                        {initial}
                    </div>

                    <div className="sidebar-user-info">
                        <strong>{user?.name || "User"}</strong>

                        <small>
                            {user?.email || "user@example.com"}
                        </small>
                    </div>

                    <button
                        className="icon-button"
                        onClick={logout}
                        title="Sign out"
                    >
                        <i className="fa-solid fa-right-from-bracket" />
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;