export interface TPatient {
  name: string;
  avatar: string;
  address: string;
  weight: string | number;
  bloodPressure: string | number;
  bloodGlucose: string | number;
  patientID: string | number;
  appointment: number;
  completed: number;
  height: string | number;
  bloodType: string | number;
  disease: string | number;
  alergies: string | number;
  id: string | number;
  notes: TPatientNote[];
}

export interface TPatientNote {
  date: string;
  title: string;
  description: string;
  treatment: string;
  duration: string;
  document: string;
}
