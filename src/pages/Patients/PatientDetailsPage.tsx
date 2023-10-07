// import React from 'react'

import { useParams } from "react-router-dom";
import PageWrapper from "../../components/page/PageWrapper";
import { useGetOnePatient } from "../../hooks/usePatients";
import LoaderWrapper from "../../components/common/Loaders/LoaderWrapper";
import PatientDetails from "../../components/patients/PatientDetails";
import { TPatient } from "../../types/patient";
import PageTitle from "../../components/common/PageTitle";
// import MobileHeader from "../../components/Header/MobileHeader";
import MobileHeaderDetailsPage from "../../components/Header/MobileHeaderDetailsPage";
import AppLayoutContent from "../../components/common/AppLayoutContent";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetOnePatient<TPatient>(id!);
  return (
    <PageWrapper title="Patient Details">
      <AppLayoutContent>
        <MobileHeaderDetailsPage href="patients" text="Patient Details" />
        <PageTitle text="Patient Details" />

        <LoaderWrapper isLoading={isLoading}>
          {data ? <PatientDetails data={data} /> : null}
        </LoaderWrapper>
      </AppLayoutContent>
    </PageWrapper>
  );
};

export default PatientDetailsPage;
