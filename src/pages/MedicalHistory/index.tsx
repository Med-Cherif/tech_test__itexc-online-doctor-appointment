/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumn } from "react-data-table-component";
import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import PageTitle from "../../components/common/PageTitle";
import DataTableComponent from "../../components/common/DataTableComponent";
import { useMedicalHistory } from "../../hooks/useMedicalHistory";
import { TMedicalReport } from "../../types/medicalReport";
import Avatar from "../../components/common/Avatar";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import Badge from "../../components/common/Badge";

const columns: TableColumn<TMedicalReport>[] = [
  {
    name: "Patient",
    minWidth: "200px",

    selector: (item) => {
      return (
        <>
          <div className="table-medical-patient-wrapper">
            <div>
              <Avatar src={item.patientPicture} size={32} />
            </div>
            <div>
              <h3 className="table-medical-patient-name">{item.patientName}</h3>
              <span className="table-medical-patient-code">
                {item.patientCode}
              </span>
            </div>
          </div>
        </>
      ) as any;
    },
  },
  {
    name: "Appointment",
    selector: (item) => {
      return item.appointment;
    },
  },
  {
    name: "Date",
    selector: (item) => {
      return item.date;
    },
  },
  {
    name: "Time",
    selector: (item) => {
      return item.time;
    },
  },
  {
    name: "Status",
    selector: (item, index) => {
      const statues = ["success", "danger", "warning"];
      return (
        <Badge variant={statues[index! % statues.length] as any}>
          {item.status}
        </Badge>
      ) as any;
    },
  },
  {
    name: "Action",
    selector: () => {
      return (
        <div>
          <AiOutlineEyeInvisible />
          <BiTrashAlt />
        </div>
      );
    },
  },
];

const MedicalHistory = () => {
  const { data } = useMedicalHistory();
  return (
    <div>
      <PageTitle text="Medical History" />
      <Card>
        <CardBody>
          <DataTableComponent
            pagination
            paginationPerPage={10}
            // progressPending={true}
            // progressComponent
            data={data}
            columns={columns as any}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default MedicalHistory;
