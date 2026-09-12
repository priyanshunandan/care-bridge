import { useState } from "react";
import { medicalRecords } from "../data/mockData";

function MedicalRecords() {
    const [records, setRecords] =
        useState(medicalRecords);

    const addRecord = () => {
        const title = prompt("Enter record title:");

        if (!title) return;

        setRecords((previous) => [
            ...previous,
            {
                id: Date.now(),
                title,
                description: "New medical record",
                type: "RECORD",
                date: new Date().toLocaleDateString(),
                icon: "fa-file-medical",
            },
        ]);
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        HEALTH HISTORY
                    </span>

                    <h1>Medical Records</h1>

                    <p>
                        Your important health records at a glance.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={addRecord}
                >
                    <i className="fa-solid fa-plus" />
                    Add Record
                </button>
            </div>

            <div className="record-grid">
                {records.map((record) => (
                    <div
                        className="record-card"
                        key={record.id}
                    >
                        <div className="record-top">
                            <div className="record-icon blue">
                                <i
                                    className={`fa-solid ${record.icon}`}
                                />
                            </div>

                            <span className="record-tag">
                                {record.type}
                            </span>
                        </div>

                        <h3>{record.title}</h3>

                        <p>{record.description}</p>

                        <div className="record-footer">
                            <span>{record.date}</span>

                            <button className="text-btn">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MedicalRecords;