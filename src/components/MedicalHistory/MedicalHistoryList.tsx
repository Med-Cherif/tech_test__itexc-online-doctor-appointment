/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TMedicalReport } from "../../types/medicalReport";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import AppointmentUserDetails from "../Appointment/AppointmentUserDetails";
import Badge from "../common/Badge";
import MedicalHistoryCardMetaData from "./MedicalHistoryCardMetaData";
interface TProps {
  data: TMedicalReport[];
}

const MedicalHistoryList = ({ data }: TProps) => {
  return (
    <div className="medical-history-list-cards">
      {data.map((item, index) => {
        const {
          patientPicture,
          patientName,
          patientCode,
          id,
          status,
          appointment,
          date,
          time,
        } = item;
        const statues = ["success", "danger", "warning"];
        return (
          <Card key={id}>
            <CardBody>
              <div className="medical-history-card-user-details">
                <AppointmentUserDetails
                  avatarSize={40}
                  name={patientName}
                  src={patientPicture}
                  subTitle={patientCode}
                />
                <Badge variant={statues[index! % statues.length] as any}>
                  {status}
                </Badge>
              </div>
              <div className="medical-history-card-metadata-items">
                <MedicalHistoryCardMetaData
                  prop="Patient"
                  hasBackround
                  value={appointment}
                />
                <MedicalHistoryCardMetaData prop="Date" value={date} />
                <MedicalHistoryCardMetaData prop="Time" value={time} />
                <MedicalHistoryCardMetaData
                  prop="Total"
                  value={"$520"}
                  hasBackround
                />
                <MedicalHistoryCardMetaData
                  prop="Pay with"
                  value={"Oran Bank"}
                />
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default MedicalHistoryList;
