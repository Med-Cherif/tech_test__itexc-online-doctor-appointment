export interface TAppointment {
  _id: string;
  avatar: string;
  timeFrom: string;
  timeTo: string;
  date: string;
  name: string;
  description: string;
  status: TAppointmentStatus;
}

export type TAppointmentStatus = "pending" | "accepted" | "declined";
