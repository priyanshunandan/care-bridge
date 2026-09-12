import { useState } from "react";
import { appointments as initialAppointments } from "../data/mockData";

function Appointments() {
    const [appointments, setAppointments] =
        useState(initialAppointments);

    const cancelAppointment = (id: number) => {
        setAppointments((previous) =>
            previous.filter(
                (appointment) =>
                    appointment.id !== id
            )
        );
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        YOUR CARE
                    </span>

                    <h1>Appointments</h1>

                    <p>
                        Manage upcoming healthcare appointments.
                    </p>
                </div>

                <button className="primary-btn">
                    <i className="fa-solid fa-plus" />
                    Book Appointment
                </button>
            </div>

            <div className="appointments-list">
                {appointments.map((appointment) => (
                    <div
                        className="appointment-card-large"
                        key={appointment.id}
                    >
                        <div className="appointment-date-large">
                            <span>{appointment.month}</span>
                            <strong>{appointment.day}</strong>
                        </div>

                        <div className="appointment-details">
                            <span className="appointment-type">
                                {appointment.type}
                            </span>

                            <h3>{appointment.doctor}</h3>

                            <p>{appointment.location}</p>

                            <span className="appointment-time">
                                <i className="fa-regular fa-clock" />
                                {appointment.time}
                            </span>
                        </div>

                        <div className="appointment-actions">
                            <button className="secondary-btn">
                                Reschedule
                            </button>

                            <button
                                className="danger-btn"
                                onClick={() =>
                                    cancelAppointment(
                                        appointment.id
                                    )
                                }
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Appointments;