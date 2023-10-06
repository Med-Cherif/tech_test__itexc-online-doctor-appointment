/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import Card from "../common/Card";
// import CardBody from "../common/Card/CardBody";
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
    minWidth: "180px",

    cell: (item) => {
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
      );
    },
  },
  {
    grow: 2,
    name: "Appointment",
    cell: (item) => {
      return item.appointment;
    },
  },
  {
    name: "Date",
    minWidth: "auto",

    selector: (item) => {
      return item.date;
    },
  },
  {
    name: "Time",
    // minWidth: "auto",
    selector(row) {
      return row.time;
    },
  },
  {
    name: "Status",

    minWidth: "120px",
    cell: (item, index) => {
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
    cell: () => {
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
    <DataTableComponent
      pagination
      paginationPerPage={10}
      data={data}
      columns={columns as any}
    />
  );
};

export default MedicalHistoryTable;
