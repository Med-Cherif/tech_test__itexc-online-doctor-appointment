/* eslint-disable @typescript-eslint/no-explicit-any */
import PageTitle from "../../components/common/PageTitle";
import MedicalHistoryTable from "../../components/MedicalHistory/MedicalHistoryTable";
// import { useMedicalHistory } from "../../hooks/useMedicalHistory";

const MedicalHistory = () => {
  return (
    <div>
      <PageTitle text="Medical History" />
      <MedicalHistoryTable />
    </div>
  );
};

export default MedicalHistory;
