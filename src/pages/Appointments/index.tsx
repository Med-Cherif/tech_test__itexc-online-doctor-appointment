import AppointmentListCard from "../../components/Appointment/AppointmentListCard";
import MobileHeader from "../../components/Header/MobileHeader";
import PageTitle from "../../components/common/PageTitle";

const Appointments = () => {
  return (
    <div>
      <MobileHeader title="Appointment" />
      <PageTitle text="Appointment" />
      <div className="appointments-cards">
        <AppointmentListCard />
        <AppointmentListCard />
        <AppointmentListCard />
        <AppointmentListCard />
        <AppointmentListCard />
      </div>
    </div>
  );
};

export default Appointments;
