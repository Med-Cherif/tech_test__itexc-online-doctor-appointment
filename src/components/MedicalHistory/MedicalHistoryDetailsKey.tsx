// interface TProps {

// }

const MedicalHistoryDetailsKey = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={`medical-history-details-key ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default MedicalHistoryDetailsKey;
