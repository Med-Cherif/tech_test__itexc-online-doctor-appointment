/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import Card from "../common/Card";
// import CardBody from "../common/Card/CardBody";
import DataTableComponent from "../common/DataTableComponent";
import Badge from "../common/Badge";
import { AiOutlineEye } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { TMedicalReport } from "../../types/medicalReport";
import { TableColumn } from "react-data-table-component";
import Avatar from "../common/Avatar";
import { useMedicalHistory } from "../../hooks/useMedicalHistory";
import MedicalHistoryDetails from "./MedicalHistoryDetails";
import { useState } from "react";
import useDrawer from "../../hooks/useDrawer";

const MedicalHistoryTable = () => {
  const { isLoading, data } = useMedicalHistory();

  const [selectedItem, setSelectedItem] = useState<TMedicalReport | null>(null);
  const { onClose, onOpen, open } = useDrawer();

  const onItemClick = (item: TMedicalReport) => {
    setSelectedItem(item);
    onOpen();
  };

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
                <h3 className="table-medical-patient-name">
                  {item.patientName}
                </h3>
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
        );
      },
    },
    {
      name: "Action",
      cell: (item) => {
        return (
          <div className="table-actions">
            <AiOutlineEye fontSize={16} onClick={() => onItemClick(item)} />
            <BiTrashAlt fontSize={16} />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <MedicalHistoryDetails
        onClose={onClose}
        open={open}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <DataTableComponent
        isLoading={isLoading}
        pagination
        paginationPerPage={10}
        data={data}
        columns={columns as any}
      />
    </>
  );
};

export default MedicalHistoryTable;
