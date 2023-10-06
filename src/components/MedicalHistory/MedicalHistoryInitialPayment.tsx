import MedicalHistoryDetailsKey from "./MedicalHistoryDetailsKey";

interface TProps {
  prop: React.ReactNode;
  value: React.ReactNode;
}

const MedicalHistoryInitialPayment = ({ prop, value }: TProps) => {
  return (
    <div className="medical-history-initial-payment">
      <MedicalHistoryDetailsKey>{prop}</MedicalHistoryDetailsKey>
      <span className="medical-history-initial-payment-value font-medium">
        {value}
      </span>
    </div>
  );
};

export default MedicalHistoryInitialPayment;
