/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import PageTitle from "../../components/common/PageTitle";
import MedicalHistoryTable from "../../components/MedicalHistory/MedicalHistoryTable";
// import { useMedicalHistory } from "../../hooks/useMedicalHistory";

const MedicalHistory = () => {
  return (
    <div>
      <PageTitle text="Medical History" />
      <Card>
        <CardBody>
          <MedicalHistoryTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default MedicalHistory;
