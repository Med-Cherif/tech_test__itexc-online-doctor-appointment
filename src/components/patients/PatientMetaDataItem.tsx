interface TProps {
  property: string;
  value: string | number;
}

const PatientMetaDataItem = ({ property, value }: TProps) => {
  return (
    <div className="patient-meta-data-item">
      <p className="patient-meta-data-key">{property}:</p>
      <p className="patient-meta-data-value">{value}</p>
    </div>
  );
};

export default PatientMetaDataItem;
