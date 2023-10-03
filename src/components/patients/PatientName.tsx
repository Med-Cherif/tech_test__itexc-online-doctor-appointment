interface TProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const PatientName = ({ text }: TProps) => {
  return <h2 className="patient-name">{text}</h2>;
};

export default PatientName;
