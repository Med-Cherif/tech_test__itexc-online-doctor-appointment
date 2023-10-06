interface TProps {
  title: string;
  value: number;
}

const PatientDetailsAppointmentNumber = ({ title, value }: TProps) => {
  return (
    <div className="patient-appointment-number">
      <p className="patient-appointment-number-value">{value}</p>
      <p className="patient-appointment-number-title">{title}</p>
    </div>
  );
};

export default PatientDetailsAppointmentNumber;
