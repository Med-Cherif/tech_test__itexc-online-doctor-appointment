interface TProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const PatientAddress = ({ text }: TProps) => {
  return <p className="patient-address">{text}</p>;
};

export default PatientAddress;
