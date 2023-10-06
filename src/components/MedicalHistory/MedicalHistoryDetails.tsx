import Drawer from "../common/Drawer";
import DrawerHeader from "../common/Drawer/DrawerHeader";
import DrawerTitle from "../common/Drawer/DrawerTitle";
import { TMedicalReport } from "../../types/medicalReport";
import DrawerBody from "../common/Drawer/DrawerBody";
import AppointmentUserDetails from "../Appointment/AppointmentUserDetails";
import MedicalHistoryTitle from "./MedicalHistoryTitle";
import FileDownloader from "../common/FileDownloader";
import MedicalHistoryInitialPayment from "./MedicalHistoryInitialPayment";
import MedicalHistoryPaymentDetail from "./MedicalHistoryPaymentDetail";
import Badge from "../common/Badge";

interface TProps {
  selectedItem: TMedicalReport | null;
  open: boolean;
  onClose: () => void;

  setSelectedItem: React.Dispatch<React.SetStateAction<TMedicalReport | null>>;
}

const MedicalHistoryDetails = ({
  open,
  selectedItem,
  setSelectedItem,
  onClose,
}: TProps) => {
  const afterClose = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <Drawer open={open} onClose={onClose} afterClose={afterClose}>
        <DrawerHeader onClose={onClose}>
          <DrawerTitle>Medical History</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {selectedItem && (
            <div className="medical-details-wrapper">
              <div>
                <MedicalHistoryTitle>Patient Information</MedicalHistoryTitle>
                <AppointmentUserDetails
                  name={selectedItem.patientName}
                  src={selectedItem.patientPicture}
                  subTitle="Oran , es senia 310009"
                />
              </div>
              <div>
                <MedicalHistoryTitle>Payment Detail</MedicalHistoryTitle>
                <div className="medical-details-payment-datails-metadata">
                  <MedicalHistoryPaymentDetail prop="From" value="Oran Bank" />
                  <MedicalHistoryPaymentDetail
                    prop="Pay With"
                    value="Debit Card"
                  />
                  <MedicalHistoryPaymentDetail
                    prop="Pay On"
                    value="Jan 12, 2023 At 09:00 AM"
                  />
                  <MedicalHistoryPaymentDetail
                    prop="Status Payment"
                    value={<Badge variant="success">Success</Badge>}
                  />
                </div>
              </div>
              <div>
                <MedicalHistoryTitle>Initial Payment</MedicalHistoryTitle>
                <div className="medical-details-init-payment-metadata">
                  <MedicalHistoryInitialPayment
                    prop="Medical Check-Up"
                    value={"$500"}
                  />
                  <MedicalHistoryInitialPayment prop="Medicine" value={"$20"} />
                  <hr className="medical-details-hr" />
                  <MedicalHistoryInitialPayment
                    prop={<span className="font-medium">Grand Total</span>}
                    value={<span className="text-success">$500</span>}
                  />
                </div>
              </div>
              <div>
                <MedicalHistoryTitle>Documentation</MedicalHistoryTitle>
                <FileDownloader name="Medical-invoice-pdf" />
              </div>
            </div>
          )}
        </DrawerBody>
      </Drawer>
    </>
  );
};

export default MedicalHistoryDetails;
