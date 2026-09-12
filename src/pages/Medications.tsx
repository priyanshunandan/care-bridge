import { useState } from "react";
import { medications as initialMedications } from "../data/mockData";

function Medications() {
    const [medications, setMedications] =
        useState(initialMedications);

    const markTaken = (id: number) => {
        setMedications((previous) =>
            previous.map((medication) =>
                medication.id === id
                    ? {
                        ...medication,
                        taken: !medication.taken,
                    }
                    : medication
            )
        );
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        DAILY ROUTINE
                    </span>

                    <h1>Medications</h1>

                    <p>
                        Stay on track with your medication
                        schedule.
                    </p>
                </div>

                <button className="primary-btn">
                    <i className="fa-solid fa-plus" />
                    Add Medication
                </button>
            </div>

            <div className="medication-page-grid">
                <div className="panel">
                    <div className="panel-header">
                        <div>
                            <span className="panel-label">
                                TODAY
                            </span>

                            <h3>Medication Schedule</h3>
                        </div>

                        <span className="date-label">
                            Today
                        </span>
                    </div>

                    <div className="large-med-list">
                        {medications.map((medication) => (
                            <div
                                className="large-medication"
                                key={medication.id}
                            >
                                <div className="large-med-icon purple">
                                    <i
                                        className={`fa-solid ${medication.icon}`}
                                    />
                                </div>

                                <div className="large-med-info">
                                    <strong>{medication.name}</strong>

                                    <span>{medication.dosage}</span>

                                    <small>
                                        {medication.schedule} ·{" "}
                                        {medication.time}
                                    </small>
                                </div>

                                <button
                                    className={
                                        medication.taken
                                            ? "med-action taken"
                                            : "med-action"
                                    }
                                    onClick={() =>
                                        markTaken(medication.id)
                                    }
                                >
                                    <i className="fa-solid fa-check" />

                                    {medication.taken
                                        ? "Taken"
                                        : "Mark Taken"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="panel adherence-card">
                    <span className="panel-label">
                        THIS WEEK
                    </span>

                    <h3>Medication Adherence</h3>

                    <div className="adherence-circle">
                        <div>
                            <strong>86%</strong>
                            <span>Adherence</span>
                        </div>
                    </div>

                    <p>
                        Great job! Keep following your medication
                        schedule consistently.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Medications;