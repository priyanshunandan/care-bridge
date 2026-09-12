import { useEffect, useState } from "react";

function PeriodTracker() {
    const [startDate, setStartDate] =
        useState("");

    const [cycleLength, setCycleLength] =
        useState(28);

    const [periodLength, setPeriodLength] =
        useState(5);

    const [showModal, setShowModal] =
        useState(false);

    const [selectedSymptoms, setSelectedSymptoms] =
        useState<string[]>([]);

    useEffect(() => {
        const savedData = localStorage.getItem(
            "carebridgePeriod"
        );

        if (savedData) {
            const data = JSON.parse(savedData);

            setStartDate(data.startDate);
            setCycleLength(data.cycleLength);
            setPeriodLength(data.periodLength);
        }
    }, []);

    const savePeriod = () => {
        if (!startDate) {
            alert("Please select a start date.");
            return;
        }

        localStorage.setItem(
            "carebridgePeriod",
            JSON.stringify({
                startDate,
                cycleLength,
                periodLength,
            })
        );

        setShowModal(false);
    };

    const nextPeriod = startDate
        ? new Date(
            new Date(startDate).getTime() +
            cycleLength *
            24 *
            60 *
            60 *
            1000
        ).toLocaleDateString()
        : "Not available";

    const toggleSymptom = (symptom: string) => {
        setSelectedSymptoms((previous) =>
            previous.includes(symptom)
                ? previous.filter(
                    (item) => item !== symptom
                )
                : [...previous, symptom]
        );
    };

    const symptoms = [
        "Cramps",
        "Headache",
        "Bloating",
        "Fatigue",
        "Mood Swings",
        "Back Pain",
    ];

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        CYCLE HEALTH
                    </span>

                    <h1>Period Tracker</h1>

                    <p>
                        Track your cycle, symptoms and upcoming
                        periods.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() => setShowModal(true)}
                >
                    <i className="fa-solid fa-plus" />
                    Log Period
                </button>
            </div>

            <div className="period-summary-grid">
                <div className="period-stat-card">
                    <span>Last Period</span>

                    <strong>
                        {startDate
                            ? new Date(
                                startDate
                            ).toLocaleDateString()
                            : "Not recorded"}
                    </strong>
                </div>

                <div className="period-stat-card">
                    <span>Next Expected</span>

                    <strong>{nextPeriod}</strong>
                </div>

                <div className="period-stat-card">
                    <span>Cycle Length</span>

                    <strong>{cycleLength} days</strong>
                </div>

                <div className="period-stat-card">
                    <span>Period Length</span>

                    <strong>{periodLength} days</strong>
                </div>
            </div>

            <div className="period-grid">
                <div className="panel calendar-panel">
                    <span className="panel-label">
                        CYCLE CALENDAR
                    </span>

                    <h3>Period Tracking Calendar</h3>

                    <div className="calendar-placeholder">
                        <i className="fa-solid fa-calendar-days" />

                        <p>
                            Calendar functionality will highlight
                            logged and predicted period dates.
                        </p>
                    </div>
                </div>

                <div className="panel cycle-panel">
                    <span className="panel-label">
                        CURRENT CYCLE
                    </span>

                    <h3>
                        {startDate
                            ? "Cycle Tracking Active"
                            : "Cycle Day 1"}
                    </h3>

                    <div className="cycle-progress">
                        <div className="cycle-progress-track">
                            <div
                                className="cycle-progress-fill"
                                style={{ width: "25%" }}
                            />
                        </div>
                    </div>

                    <div className="cycle-message">
                        <i className="fa-solid fa-circle-info" />

                        <p>
                            {startDate
                                ? "Your cycle information is being tracked."
                                : "Log your period to start tracking your cycle."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="panel symptoms-panel">
                <div className="panel-header">
                    <div>
                        <span className="panel-label">
                            SYMPTOM TRACKER
                        </span>

                        <h3>How are you feeling?</h3>
                    </div>
                </div>

                <div className="symptom-grid">
                    {symptoms.map((symptom) => (
                        <button
                            key={symptom}
                            className={
                                selectedSymptoms.includes(symptom)
                                    ? "symptom-btn selected"
                                    : "symptom-btn"
                            }
                            onClick={() =>
                                toggleSymptom(symptom)
                            }
                        >
                            {symptom}
                        </button>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-card">
                        <div className="modal-header">
                            <div>
                                <span className="panel-label">
                                    CYCLE TRACKER
                                </span>

                                <h2>Log Period</h2>
                            </div>

                            <button
                                className="modal-close"
                                onClick={() =>
                                    setShowModal(false)
                                }
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>

                        <div className="input-group">
                            <label>
                                First day of your period
                            </label>

                            <input
                                type="date"
                                value={startDate}
                                onChange={(event) =>
                                    setStartDate(
                                        event.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="modal-two-columns">
                            <div className="input-group">
                                <label>
                                    Average cycle length
                                </label>

                                <input
                                    type="number"
                                    value={cycleLength}
                                    onChange={(event) =>
                                        setCycleLength(
                                            Number(event.target.value)
                                        )
                                    }
                                />
                            </div>

                            <div className="input-group">
                                <label>Period length</label>

                                <input
                                    type="number"
                                    value={periodLength}
                                    onChange={(event) =>
                                        setPeriodLength(
                                            Number(event.target.value)
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                className="secondary-btn"
                                onClick={() =>
                                    setShowModal(false)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                className="primary-btn"
                                onClick={savePeriod}
                            >
                                Save Period
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PeriodTracker;