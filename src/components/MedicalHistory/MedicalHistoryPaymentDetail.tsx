import MedicalHistoryDetailsKey from "./MedicalHistoryDetailsKey";

interface TProps {
  prop: React.ReactNode;
  value: React.ReactNode;
}

const MedicalHistoryPaymentDetail = ({ prop, value }: TProps) => {
  return (
    <div className="medical-history-payment-detail">
      <MedicalHistoryDetailsKey className="mb-2">
        {prop}
      </MedicalHistoryDetailsKey>
      <span className="medical-history-payment-detail-value">{value}</span>
    </div>
  );
};

export default MedicalHistoryPaymentDetail;
