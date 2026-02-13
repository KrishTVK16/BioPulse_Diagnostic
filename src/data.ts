import { Test, Doctor, Patient, Appointment, Report } from './types';

export const TESTS: Test[] = [
  {
    id: 't1',
    name: 'Complete Blood Count (CBC)',
    category: 'Pathology',
    price: 45,
    turnaround: '12 Hours',
    description: 'Evaluates overall health and detects a wide range of disorders, including anemia, infection and leukemia.',
    preparation: 'No special preparation required.'
  },
  {
    id: 't2',
    name: 'Lipid Profile',
    category: 'Cardiac',
    price: 60,
    turnaround: '24 Hours',
    description: 'Measures different types of cholesterol and triglycerides in your blood to assess heart health risk.',
    preparation: 'Fasting for 9-12 hours is required.'
  },
  {
    id: 't3',
    name: 'Thyroid Function Test',
    category: 'Thyroid',
    price: 55,
    turnaround: '24 Hours',
    description: 'Blood tests used to measure how well your thyroid gland is working (TSH, T3, T4).',
    preparation: 'No special preparation required.'
  },
  {
    id: 't4',
    name: 'HbA1c (Glycated Hemoglobin)',
    category: 'Diabetes',
    price: 40,
    turnaround: '6 Hours',
    description: 'Measures your average blood sugar levels over the past 3 months to screen for or monitor diabetes.',
    preparation: 'No fasting required.'
  },
  {
    id: 't5',
    name: 'Vitamin D Total',
    category: 'Vitamin',
    price: 75,
    turnaround: '24 Hours',
    description: 'Screening for Vitamin D deficiency, essential for bone health and immune function.',
    preparation: 'No special preparation required.'
  },
  {
    id: 't6',
    name: 'MRI Brain Contrast',
    category: 'Radiology',
    price: 350,
    turnaround: '48 Hours',
    description: 'Detailed imaging of the brain using magnetic fields and contrast dye to detect tumors or abnormalities.',
    preparation: 'Remove all metal objects. Fasting may be required.'
  },
  {
    id: 't7',
    name: 'Liver Function Test',
    category: 'Pathology',
    price: 50,
    turnaround: '12 Hours',
    description: 'Helps determine the health of your liver by measuring the levels of proteins, liver enzymes, and bilirubin in your blood.',
    preparation: 'Fasting may be required.'
  },
  {
    id: 't8',
    name: 'Kidney Function Test',
    category: 'Pathology',
    price: 55,
    turnaround: '12 Hours',
    description: 'Tests to measure how well your kidneys are removing wastes and excess fluid from the blood.',
    preparation: 'No special preparation required.'
  },
  {
    id: 't9',
    name: 'Electrocardiogram (ECG)',
    category: 'Cardiac',
    price: 30,
    turnaround: '1 Hour',
    description: 'Records the electrical signal from your heart to check for different heart conditions.',
    preparation: 'Avoid oily creams on chest.'
  },
  {
    id: 't10',
    name: 'Allergy Panel (Comprehensive)',
    category: 'Allergy',
    price: 120,
    turnaround: '48 Hours',
    description: 'Tests for allergic reactions to various substances including foods, pollen, and pet dander.',
    preparation: 'Stop antihistamines 48 hours prior.'
  },
  {
    id: 't11',
    name: 'CT Scan - Chest',
    category: 'Radiology',
    price: 200,
    turnaround: '24 Hours',
    description: 'Uses X-rays to create detailed images of the chest and lungs.',
    preparation: 'Wear loose clothing. Remove metal objects.'
  },
  {
    id: 't12',
    name: 'Fasting Blood Sugar (FBS)',
    category: 'Diabetes',
    price: 20,
    turnaround: '6 Hours',
    description: 'Measures blood sugar after an overnight fast.',
    preparation: 'Fast for at least 8 hours.'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Chen',
    specialty: 'Senior Pathologist',
    email: 'sarah.chen@biopulse.com',
    patients: 1240,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'd2',
    name: 'Dr. James Wilson',
    specialty: 'Cardiologist',
    email: 'j.wilson@biopulse.com',
    patients: 980,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'd3',
    name: 'Dr. Anita Roy',
    specialty: 'Endocrinologist',
    email: 'anita.roy@biopulse.com',
    patients: 1560,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'd4',
    name: 'Dr. Robert Marcus',
    specialty: 'Radiologist',
    email: 'r.marcus@biopulse.com',
    patients: 850,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'd5',
    name: 'Dr. Emily Zhang',
    specialty: 'General Physician',
    email: 'emily.z@biopulse.com',
    patients: 2100,
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'd6',
    name: 'Dr. Michael Ross',
    specialty: 'Microbiologist',
    email: 'm.ross@biopulse.com',
    patients: 600,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300'
  }
];

export const APPOINTMENTS: Appointment[] = [
  { id: 'a1', patientName: 'John Doe', testName: 'Lipid Profile', date: '2025-10-24', time: '09:00 AM', status: 'Confirmed', doctorName: 'Dr. James Wilson' },
  { id: 'a2', patientName: 'Jane Smith', testName: 'MRI Brain', date: '2025-10-25', time: '11:00 AM', status: 'Pending', doctorName: 'Dr. Robert Marcus' },
  { id: 'a3', patientName: 'Robert Brown', testName: 'HbA1c', date: '2025-10-23', time: '08:30 AM', status: 'Completed', doctorName: 'Dr. Anita Roy' },
];

export const REPORTS: Report[] = [
  { id: 'r1', testName: 'Complete Blood Count', patientName: 'John Doe', date: '2025-10-20', status: 'Ready' },
  { id: 'r2', testName: 'Thyroid Profile', patientName: 'Alice Johnson', date: '2025-10-22', status: 'Pending' },
  { id: 'r3', testName: 'Vitamin D', patientName: 'Michael Kay', date: '2025-10-19', status: 'Reviewed' },
];