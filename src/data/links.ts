import { BiBarChartSquare, BiChart } from "react-icons/bi";
import { TiGroupOutline } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";

const links = [
  {
    id: 1,
    title: "Dashboard",
    Icon: BiBarChartSquare,
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Patients List",
    Icon: TiGroupOutline,
    href: "/patients",
  },
  {
    id: 3,
    title: "Messages",
    Icon: AiOutlineMessage,
    href: "/messages",
  },
  {
    id: 4,
    title: "Appointment",
    Icon: LuCalendarDays,
    href: "/appointment",
  },
  {
    id: 5,
    title: "Medical History",
    Icon: BiChart,
    href: "/medical-history",
  },
];

export default links;
