import { TPatientNote } from "../../types/patient";
import PatientNoteMetadataItem from "./PatientNoteMetadataItem";

interface TProps {
  note: TPatientNote;
}

const PatientNote = ({ note }: TProps) => {
  const { title, date, description, treatment, document, duration } = note;
  //   const metadata = [
  //     {
  //         id: 1,
  //         prop: "Treatment",
  //         value: treatment
  //     },
  //     {
  //         id: 2,
  //         prop: "Treatment",
  //         value: treatment
  //     },
  //     {
  //         id: 3,
  //         prop: "Treatment",
  //         value: document
  //     },
  //   ]
  return (
    <div className="patient-note">
      <p className="patient-note-date">{date}</p>
      <div className="patient-note-card">
        <h2 className="patient-note-title">{title}</h2>
        <p className="patient-note-description">{description}</p>
        <div className="patient-note-metadata">
          <PatientNoteMetadataItem prop="Treatment" value={treatment} />
          <PatientNoteMetadataItem prop="Duration" value={duration} />
          <PatientNoteMetadataItem
            prop="Document"
            value={
              <a
                download={"document.pdf"}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                {document}
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PatientNote;
