import type {
    Medication,
    MedicalRecord,
    Appointment,
} from "../types";

export const medications: Medication[] = [
    {
        id: 1,
        name: "Vitamin D3",
        dosage: "1 tablet",
        schedule: "After breakfast",
        time: "9:00 AM",
        taken: false,
        icon: "fa-capsules",
    },
    {
        id: 2,
        name: "Iron Supplement",
        dosage: "1 tablet",
        schedule: "After lunch",
        time: "2:00 PM",
        taken: false,
        icon: "fa-tablets",
    },
    {
        id: 3,
        name: "Omega 3",
        dosage: "1 capsule",
        schedule: "With dinner",
        time: "8:30 PM",
        taken: false,
        icon: "fa-pills",
    },
];

export const appointments: Appointment[] = [
    {
        id: 1,
        type: "General Consultation",
        doctor: "Dr. Ananya Sharma",
        location: "City Care Clinic",
        date: "12 Sep 2026",
        month: "SEP",
        day: "12",
        time: "11:30 AM",
    },
    {
        id: 2,
        type: "Dental Checkup",
        doctor: "Dr. Rahul Mehta",
        location: "Smile Dental Care",
        date: "24 Sep 2026",
        month: "SEP",
        day: "24",
        time: "4:00 PM",
    },
];

export const medicalRecords: MedicalRecord[] = [
    {
        id: 1,
        title: "Complete Blood Count",
        description: "Blood test report",
        type: "LAB",
        date: "22 Aug 2026",
        icon: "fa-vial",
    },
    {
        id: 2,
        title: "Health Checkup",
        description: "General health assessment",
        type: "REPORT",
        date: "08 Sep 2026",
        icon: "fa-heart-pulse",
    },
    {
        id: 3,
        title: "Chest X-Ray",
        description: "Diagnostic imaging report",
        type: "REPORT",
        date: "15 Jul 2026",
        icon: "fa-lungs",
    },
];