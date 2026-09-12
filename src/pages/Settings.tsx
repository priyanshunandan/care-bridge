import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Settings() {
    const { user, updateUser, logout } = useAuth();
    const { darkMode, toggleTheme } = useTheme();

    const [name, setName] = useState(
        user?.name || ""
    );

    const [email, setEmail] = useState(
        user?.email || ""
    );

    const [notifications, setNotifications] =
        useState(true);

    const saveSettings = () => {
        updateUser(name, email);
        alert("Settings saved successfully!");
    };

    const deleteData = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete all CareBridge local data?"
        );

        if (!confirmed) return;

        localStorage.clear();
        logout();
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        ACCOUNT
                    </span>

                    <h1>Settings</h1>

                    <p>
                        Manage your CareBridge preferences.
                    </p>
                </div>
            </div>

            <div className="settings-grid">
                <div className="panel settings-panel">
                    <div className="settings-heading">
                        <div className="avatar large-avatar">
                            {user?.name
                                ?.charAt(0)
                                .toUpperCase() || "U"}
                        </div>

                        <div>
                            <h3>Profile Information</h3>

                            <p>
                                Update your personal information.
                            </p>
                        </div>
                    </div>

                    <div className="settings-form">
                        <div className="input-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                className="settings-input"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>

                            <input
                                type="email"
                                className="settings-input"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>

                        <button
                            className="primary-btn"
                            onClick={saveSettings}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="panel settings-panel">
                    <span className="panel-label">
                        PREFERENCES
                    </span>

                    <h3>App Preferences</h3>

                    <div className="setting-row">
                        <div>
                            <strong>Dark Mode</strong>

                            <span>
                                Change the appearance of CareBridge.
                            </span>
                        </div>

                        <button
                            className={
                                darkMode
                                    ? "toggle-switch active"
                                    : "toggle-switch"
                            }
                            onClick={toggleTheme}
                        >
                            <span />
                        </button>
                    </div>

                    <div className="setting-row">
                        <div>
                            <strong>Notifications</strong>

                            <span>
                                Receive health reminders.
                            </span>
                        </div>

                        <button
                            className={
                                notifications
                                    ? "toggle-switch active"
                                    : "toggle-switch"
                            }
                            onClick={() =>
                                setNotifications(!notifications)
                            }
                        >
                            <span />
                        </button>
                    </div>
                </div>

                <div className="panel danger-panel">
                    <span className="panel-label">
                        DANGER ZONE
                    </span>

                    <h3>Delete Local Data</h3>

                    <p>
                        This will remove your demo account and
                        locally stored CareBridge data.
                    </p>

                    <button
                        className="danger-btn"
                        onClick={deleteData}
                    >
                        Delete My Data
                    </button>
                </div>
            </div>
        </>
    );
}

export default Settings;