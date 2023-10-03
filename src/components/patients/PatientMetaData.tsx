import PatientMetaDataItem from "./PatientMetaDataItem";

interface TProps {
  metaData: {
    [property: string]: string | number;
  };
}

const PatientMetaData = ({ metaData }: TProps) => {
  return (
    <div className="patient-meta-data-wrapper">
      {Object.keys(metaData).map((key) => {
        return (
          <PatientMetaDataItem key={key} property={key} value={metaData[key]} />
        );
      })}
    </div>
  );
};

export default PatientMetaData;
