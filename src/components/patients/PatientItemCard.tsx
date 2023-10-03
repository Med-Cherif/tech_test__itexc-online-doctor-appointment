import { Link } from "react-router-dom";
import { TPatient } from "../../types/patient";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import PatientAddress from "./PatientAddress";
import PatientMetaData from "./PatientMetaData";
import PatientName from "./PatientName";

interface TProps {
  patient: TPatient;
}

const PatientItemCard = ({ patient }: TProps) => {
  return (
    <Card>
      <CardBody>
        <Avatar src={patient.avatar} size={48} />
        <PatientName text={patient.name} />
        <PatientAddress text={patient.address} />
        <hr className="patient-hr" />
        <PatientMetaData
          metaData={{
            Weight: patient.weight,
            "Blood Pressure": patient.bloodPressure,
            "Blood Glucose": patient.bloodGlucose,
          }}
        />
        <Link to={`/patients/${patient.id}`}>
          <Button fullWidth className="patient-button">
            View detail patient
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default PatientItemCard;
