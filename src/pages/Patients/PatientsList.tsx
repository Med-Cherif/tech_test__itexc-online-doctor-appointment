// import Button from "../../components/common/Button";
import ButtonIcon from "../../components/common/Button/ButtonIcon";
import PageTitle from "../../components/common/PageTitle";
import Input from "../../components/common/form/Input";
// import { BsDownload } from "react-icons/bs";
import { FiDownload, FiFilter } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { usePatients } from "../../hooks/usePatients";
import PatientItemCard from "../../components/patients/PatientItemCard";
import Pagination from "../../components/common/Pagination";
import { usePaginationData } from "../../hooks/paginationHooks";
import { TPatient } from "../../types/patient";
import MobileHeader from "../../components/Header/MobileHeader";
import LoaderWrapper from "../../components/common/Loaders/LoaderWrapper";
import PageWrapper from "../../components/page/PageWrapper";

const PAGE_SIZE = 8;

const PatientsList = () => {
  const { isLoading, data } = usePatients();

  const {
    data: paginatedData,
    page,
    totalCount,
    onPageChange,
  } = usePaginationData<TPatient>(data, PAGE_SIZE);

  return (
    <PageWrapper title="Patient List">
      <MobileHeader title="Patient List" />
      <PageTitle text="Patient List" />
      <LoaderWrapper isLoading={isLoading}>
        <div className="patient-list-actions">
          <div className="patient-list-actions-input-wrapper">
            <CiSearch className="patient-list-actions-input-icon" />
            <Input placeholder="Search For Something" />
          </div>
          <div className="patient-list-actions-buttons">
            <ButtonIcon variant="gray" icon={<FiDownload fontSize={18} />}>
              <span className="patient-actions-button-text">
                Download Report
              </span>
            </ButtonIcon>
            <ButtonIcon icon={<FiFilter fontSize={18} />} variant="gray">
              <span className="patient-actions-button-text">Filter</span>
            </ButtonIcon>
          </div>
        </div>
        <div className="patients-list-cards">
          {paginatedData.map((patientItem) => {
            return (
              <PatientItemCard key={patientItem.id} patient={patientItem} />
            );
          })}
        </div>
        <Pagination
          currentPage={page}
          pageSize={PAGE_SIZE}
          totalCount={totalCount}
          onPageChange={onPageChange}
        />
      </LoaderWrapper>
    </PageWrapper>
  );
};

export default PatientsList;
