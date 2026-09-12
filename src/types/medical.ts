export interface Medication {
    id: number;
    name: string;
    dosage: string;
    schedule: string;
    time: string;
    taken: boolean;
    icon: string;
}

export interface MedicalRecord {
    id: number;
    title: string;
    description: string;
    type: string;
    date: string;
    icon: string;
}

export interface Prescription {
    id: number;
    doctorName: string;
    patientName?: string;
    date: string;
    medications: Medication[];
    instructions?: string;
}