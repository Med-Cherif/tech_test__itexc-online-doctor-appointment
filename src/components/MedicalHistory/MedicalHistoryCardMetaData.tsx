import React from "react";

interface TProps {
  prop: React.ReactNode;
  value: React.ReactNode;
  hasBackround?: boolean;
}

const MedicalHistoryCardMetaData = ({ prop, value, hasBackround }: TProps) => {
  return (
    <div
      className={`medical-history-card-metadata ${
        hasBackround ? "has-background" : ""
      }`}
    >
      <p className="medical-history-card-metadata-prop">{prop}</p>
      <p className="medical-history-card-metadata-value">{value}</p>
    </div>
  );
};

export default MedicalHistoryCardMetaData;
