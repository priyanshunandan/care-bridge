import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wellness() {
    const [selectedMood, setSelectedMood] =
        useState("");

    const navigate = useNavigate();

    const moods = [
        ["great", "Excellent", "Great"],
        ["good", "Good", "Good"],
        ["okay", "Okay", "Neutral"],
        ["low", "Not great", "Low"],
        ["bad", "Struggling", "Bad"],
    ];

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        YOUR WELLBEING
                    </span>

                    <h1>Mental Wellness</h1>

                    <p>
                        Take a moment to check in with yourself.
                    </p>
                </div>
            </div>

            <div className="wellness-hero">
                <div>
                    <span className="panel-label">
                        DAILY CHECK-IN
                    </span>

                    <h2>How are you feeling today?</h2>

                    <p>
                        There is no right or wrong answer.
                        Your feelings matter.
                    </p>
                </div>

                <i className="fa-solid fa-cloud-sun" />
            </div>

            <div className="mood-grid">
                {moods.map(([value, label, title]) => (
                    <button
                        key={value}
                        className={
                            selectedMood === value
                                ? "mood-card selected"
                                : "mood-card"
                        }
                        onClick={() =>
                            setSelectedMood(value)
                        }
                    >
                        <span>{label}</span>
                        <strong>{title}</strong>
                    </button>
                ))}
            </div>

            <div className="wellness-grid">
                <div className="panel">
                    <span className="panel-label">
                        WELLNESS TIP
                    </span>

                    <h3>Take a mindful break</h3>

                    <p className="panel-description">
                        Step away from your screen for a few
                        minutes. Take some slow breaths and give
                        yourself time to reset.
                    </p>

                    <button
                        className="secondary-btn"
                        onClick={() =>
                            alert(
                                "Breathe in for 4 seconds, hold for 4 seconds, and breathe out for 6 seconds."
                            )
                        }
                    >
                        <i className="fa-solid fa-wind" />
                        Start breathing exercise
                    </button>
                </div>

                <div className="panel">
                    <span className="panel-label">
                        QUICK SUPPORT
                    </span>

                    <h3>Need someone to talk to?</h3>

                    <p className="panel-description">
                        You can use CareBridge AI for a supportive
                        conversation or contact a qualified
                        professional when needed.
                    </p>

                    <button
                        className="secondary-btn"
                        onClick={() =>
                            navigate("/care-ai")
                        }
                    >
                        Open CareBridge AI
                    </button>
                </div>
            </div>
        </>
    );
}

export default Wellness;