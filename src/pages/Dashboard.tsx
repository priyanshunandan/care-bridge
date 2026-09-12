import { useAuth } from "../context/AuthContext";
import { medications } from "../data/mockData";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const currentDate = new Date().toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <>
            <section className="dashboard-welcome">
                <div>
                    <div className="eyebrow">
                        <i className="fa-regular fa-calendar" />
                        {currentDate}
                    </div>

                    <h1>
                        Good day,{" "}
                        <span>{user?.name || "User"}</span>
                    </h1>

                    <p>
                        Here's your health overview for today.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() => navigate("/care-ai")}
                >
                    <i className="fa-solid fa-sparkles" />
                    Talk to CareBridge AI
                </button>
            </section>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <i className="fa-solid fa-heart-pulse" />
                    </div>

                    <div>
                        <span>Health Score</span>
                        <strong>86%</strong>
                        <small className="positive">
                            <i className="fa-solid fa-arrow-up" />
                            4% this week
                        </small>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon purple">
                        <i className="fa-solid fa-pills" />
                    </div>

                    <div>
                        <span>Medications</span>
                        <strong>3 / 4</strong>
                        <small>doses completed</small>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon green">
                        <i className="fa-solid fa-bed" />
                    </div>

                    <div>
                        <span>Sleep</span>
                        <strong>7.4h</strong>
                        <small className="positive">
                            Good sleep
                        </small>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon orange">
                        <i className="fa-solid fa-calendar-check" />
                    </div>

                    <div>
                        <span>Next Visit</span>
                        <strong>12 Sep</strong>
                        <small>Dr. Sharma</small>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="panel">
                    <div className="panel-header">
                        <div>
                            <span className="panel-label">
                                TODAY
                            </span>

                            <h3>Medication Schedule</h3>
                        </div>

                        <button
                            className="text-btn"
                            onClick={() =>
                                navigate("/medications")
                            }
                        >
                            View all
                        </button>
                    </div>

                    <div className="medication-list">
                        {medications.map((medication) => (
                            <div
                                className="medication-row"
                                key={medication.id}
                            >
                                <div className="med-icon">
                                    <i
                                        className={`fa-solid ${medication.icon}`}
                                    />
                                </div>

                                <div className="med-info">
                                    <strong>{medication.name}</strong>

                                    <span>
                                        {medication.dosage} ·{" "}
                                        {medication.schedule}
                                    </span>
                                </div>

                                <span className="time-pill">
                                    {medication.time}
                                </span>

                                <button className="check-med">
                                    <i className="fa-solid fa-check" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="panel appointment-panel">
                    <div className="panel-header">
                        <div>
                            <span className="panel-label">
                                UPCOMING
                            </span>

                            <h3>Next Appointment</h3>
                        </div>
                    </div>

                    <div className="appointment-highlight">
                        <div className="appointment-date">
                            <span>SEP</span>
                            <strong>12</strong>
                        </div>

                        <div>
                            <strong>
                                General Consultation
                            </strong>

                            <span>Dr. Ananya Sharma</span>

                            <small>
                                <i className="fa-regular fa-clock" />
                                11:30 AM · City Care Clinic
                            </small>
                        </div>
                    </div>

                    <button
                        className="secondary-btn full-btn"
                        onClick={() =>
                            navigate("/appointments")
                        }
                    >
                        View Appointment
                    </button>
                </div>
            </div>

            <div className="section-heading">
                <div>
                    <span className="panel-label">
                        QUICK ACCESS
                    </span>

                    <h3>What would you like to do?</h3>
                </div>
            </div>

            <div className="quick-grid">
                <button
                    className="quick-card"
                    onClick={() => navigate("/care-ai")}
                >
                    <div className="quick-icon purple">
                        <i className="fa-solid fa-sparkles" />
                    </div>

                    <strong>Ask CareBridge AI</strong>

                    <span>Get health guidance</span>
                </button>

                <button
                    className="quick-card"
                    onClick={() =>
                        navigate("/period-tracker")
                    }
                >
                    <div className="quick-icon pink">
                        <i className="fa-solid fa-calendar-heart" />
                    </div>

                    <strong>Track Period</strong>

                    <span>Monitor your cycle</span>
                </button>

                <button
                    className="quick-card"
                    onClick={() =>
                        navigate("/prescriptions")
                    }
                >
                    <div className="quick-icon blue">
                        <i className="fa-solid fa-file-prescription" />
                    </div>

                    <strong>Add Prescription</strong>

                    <span>Store your prescription</span>
                </button>

                <button
                    className="quick-card"
                    onClick={() =>
                        navigate("/wellness")
                    }
                >
                    <div className="quick-icon green">
                        <i className="fa-solid fa-face-smile" />
                    </div>

                    <strong>Check Your Mood</strong>

                    <span>Take a wellness check-in</span>
                </button>
            </div>
        </>
    );
}

export default Dashboard;