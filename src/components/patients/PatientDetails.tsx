import React from "react";
import { TPatient, TPatientNote } from "../../types/patient";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import PatientMetaData from "./PatientMetaData";
import Avatar from "../common/Avatar";
import PatientName from "./PatientName";
import PatientAddress from "./PatientAddress";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import PatientDetailsAppointmentNumber from "./PatientDetailsAppointmentNumber";
import Timeline from "../Timeline";
import PatientNote from "./PatientNote";
// import MobileHeaderDetailsPage from "../Header/MobileHeaderDetailsPage";

interface TProps {
  data: TPatient;
}

const PatientDetails = ({ data }: TProps) => {
  const {
    weight,
    bloodPressure,
    bloodGlucose,
    height,
    bloodType,
    disease,
    alergies,
    address,
    name,
    avatar,
    patientID,
    appointment,
    completed,
    notes,
  } = data;
  return (
    <div className="patient-details">
      <div className="patient-details-information">
        <Card>
          <CardBody>
            <div className="patient-details-user">
              <Avatar src={avatar} alt={name} size={100} />
              <PatientName text={name} />
              <div className="patient-id">
                Patient ID <span>{patientID}</span>
              </div>
              <PatientAddress text={address} />
            </div>
            <div className="patient-details-stats-numbers">
              <PatientDetailsAppointmentNumber
                value={appointment}
                title="Appointment"
              />
              <PatientDetailsAppointmentNumber
                value={completed}
                title="Appointment"
              />
            </div>
            <Link
              to={`/messages/${1}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Button fullWidth className="patient-button">
                Message Patient
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Patient Information</CardTitle>
            <PatientMetaData
              metaData={{
                Weight: weight,
                Height: height,
                "Blood Type": bloodType,
                "Blood Pressure": bloodPressure,
                "Blood Glucose": bloodGlucose,
                Disease: disease,
                Alergies: alergies,
              }}
            />
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <CardTitle>Past Notes Appointment</CardTitle>
            <Timeline
              idKey={null}
              data={notes}
              render={(item: TPatientNote) => {
                return <PatientNote note={item} />;
              }}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PatientDetails;
