/* eslint-disable @typescript-eslint/no-explicit-any */
import AppLayoutContent from "../../components/common/AppLayoutContent";
import Card from "../../components/common/Card";
import PageTitle from "../../components/common/PageTitle";
import MobileHeader from "../../components/Header/MobileHeader";
import MedicalHistoryTable from "../../components/MedicalHistory/MedicalHistoryTable";
// import { useMedicalHistory } from "../../hooks/useMedicalHistory";

const MedicalHistory = () => {
  return (
    <AppLayoutContent>
      <div>
        <MobileHeader title="Medical History" />
        <PageTitle text="Medical History" />
        <Card>
          {/* <CardBody> */}
          <MedicalHistoryTable />
          {/* </CardBody> */}
        </Card>
      </div>
    </AppLayoutContent>
  );
};

export default MedicalHistory;
