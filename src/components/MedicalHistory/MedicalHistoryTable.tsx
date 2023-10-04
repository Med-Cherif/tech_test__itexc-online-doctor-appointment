/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import DataTableComponent from "../common/DataTableComponent";
import Badge from "../common/Badge";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { TMedicalReport } from "../../types/medicalReport";
import { TableColumn } from "react-data-table-component";
import Avatar from "../common/Avatar";
import { useMedicalHistory } from "../../hooks/useMedicalHistory";

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

const MedicalHistoryTable = () => {
  const { data } = useMedicalHistory();
  return (
    <Card>
      <CardBody>
        <DataTableComponent
          pagination
          paginationPerPage={10}
          data={data}
          columns={columns as any}
        />
      </CardBody>
    </Card>
  );
};

export default MedicalHistoryTable;
