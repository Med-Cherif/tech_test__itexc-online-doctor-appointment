import MobileHeader from "../../components/Header/MobileHeader";
import MedicalHistoryTable from "../../components/MedicalHistory/MedicalHistoryTable";
import PageTitle from "../../components/common/PageTitle";

const Dashboard = () => {
  return (
    <div>
      <MobileHeader title="Dashboard" />
      <div className="dashboard-content">
        <div className="dashboard-statistics">
          <div className="dashboard-chart">
            <PageTitle text="Welcome Back Dr.Taylor!" />
            <div></div>
          </div>
          <div className="dashboard-calendar"></div>
        </div>

        <MedicalHistoryTable />
      </div>
    </div>
  );
};

export default Dashboard;
