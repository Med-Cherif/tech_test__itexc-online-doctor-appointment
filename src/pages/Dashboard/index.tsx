import DashboardCalendar from "../../components/Dashboard/DashboardCalendar";
import DashboardChart from "../../components/Dashboard/DashboardChart";
import DashboardMedicalHistory from "../../components/Dashboard/DashboardMedicalHistory";
import MobileHeader from "../../components/Header/MobileHeader";
import AppLayoutContent from "../../components/common/AppLayoutContent";
// import MedicalHistoryTable from "../../components/MedicalHistory/MedicalHistoryTable";
// import Card from "../../components/common/Card";
import PageWrapper from "../../components/page/PageWrapper";
// import PageTitle from "../../components/common/PageTitle";

const Dashboard = () => {
  return (
    <PageWrapper title="Dashboard">
      <AppLayoutContent>
        <div className="dashboard-page">
          <MobileHeader title="Dashboard" />
          <div className="dashboard-content">
            <div className="dashboard-statistics">
              <DashboardChart />
              <DashboardCalendar />
            </div>

            <DashboardMedicalHistory />
          </div>
        </div>
      </AppLayoutContent>
    </PageWrapper>
  );
};

export default Dashboard;
