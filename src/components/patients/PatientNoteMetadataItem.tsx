interface TProps {
  prop: string;
  value: React.ReactNode;
}

const PatientNoteMetadataItem = ({ prop, value }: TProps) => {
  return (
    <div className="patient-note-metadata-item">
      <p className="patient-note-metadata-item-prop">{prop}</p>
      <p className="patient-note-metadata-item-value">{value}</p>
      <p></p>
    </div>
  );
};

export default PatientNoteMetadataItem;
