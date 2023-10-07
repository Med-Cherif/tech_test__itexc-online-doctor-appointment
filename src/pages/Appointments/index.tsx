import { BsChevronDown } from "react-icons/bs";
// import AppointmentListCard from "../../components/Appointment/AppointmentListCard";
import MobileHeader from "../../components/Header/MobileHeader";
import PageTitle from "../../components/common/PageTitle";
import PageWrapper from "../../components/page/PageWrapper";
import { LuSettings2 } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import AppointmentCards from "../../components/Appointment/AppointmentCards";
import AppointmentCalendar from "../../components/Appointment/AppointmentCalendar";
import Tabs from "../../components/common/Tabs";
import TabItem from "../../components/common/Tabs/TabItem";
import { useGetAppointments } from "../../hooks/useAppointments";
import { TAppointment } from "../../types/appointment";
import React from "react";
import LoaderWrapper from "../../components/common/Loaders/LoaderWrapper";

export interface TAppointmentTabProps {
  data: TAppointment[];
  setData: React.Dispatch<React.SetStateAction<TAppointment[]>>;
}

const Appointments = () => {
  const { isLoading, data, setData } = useGetAppointments();

  const tabs = [
    {
      id: 1,
      content: <AppointmentCalendar />,
      Icon: LuCalendarDays,
    },
    {
      id: 2,
      content: <AppointmentCards data={data} setData={setData} />,
      Icon: LuSettings2,
    },
  ];

  return (
    <PageWrapper title="Appointment">
      <div>
        <MobileHeader title="Appointment" />
        <PageTitle text="Appointment" />
        <LoaderWrapper isLoading={isLoading}>
          <div className="appointment-header">
            <div className="appointment-date-picker">
              <p>Jan, 16, 2023</p>
              <BsChevronDown />
            </div>
            <div className="appointment-tabs">
              {tabs.map((tab) => {
                return (
                  <button
                    key={tab.id}
                    className={`appointment-tab-button ${
                      tab.id === 2 ? "active" : ""
                    }`}
                  >
                    <tab.Icon />
                  </button>
                );
              })}
            </div>
          </div>
          <Tabs activeTab={2}>
            {tabs.map((tab) => {
              return <TabItem tabId={tab.id}>{tab.content}</TabItem>;
            })}
          </Tabs>
        </LoaderWrapper>
      </div>
    </PageWrapper>
  );
};

export default Appointments;
