export interface Test {
  id: string;
  name: string;
  category: string;
  price: number;
  turnaround: string;
  description: string;
  preparation: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  patients: number;
  image: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  lastVisit: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  testName: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  doctorName?: string;
}

export interface Report {
  id: string;
  testName: string;
  patientName: string;
  date: string;
  status: 'Pending' | 'Reviewed' | 'Ready';
  pdfUrl?: string;
}

export enum UserRole {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN'
}