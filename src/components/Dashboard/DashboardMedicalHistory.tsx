import MedicalHistoryTable from "../MedicalHistory/MedicalHistoryTable";
import Card from "../common/Card";
import DashboardCardTitle from "./DashboardCardTitle";
import CardHeader from "../common/Card/CardHeader";

const DashboardMedicalHistory = () => {
  return (
    <Card className="dashboard-medical-history">
      <CardHeader>
        <DashboardCardTitle title="Medical History" />
      </CardHeader>

      <MedicalHistoryTable />
    </Card>
  );
};

export default DashboardMedicalHistory;
