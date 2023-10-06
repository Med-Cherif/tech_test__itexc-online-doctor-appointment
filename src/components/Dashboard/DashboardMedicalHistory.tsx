import React from "react";
import MedicalHistoryTable from "../MedicalHistory/MedicalHistoryTable";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DashboardCardTitle from "./DashboardCardTitle";

const DashboardMedicalHistory = () => {
  return (
    <Card>
      <CardBody>
        <DashboardCardTitle title="Medical History" />
        <MedicalHistoryTable />
      </CardBody>
    </Card>
  );
};

export default DashboardMedicalHistory;
