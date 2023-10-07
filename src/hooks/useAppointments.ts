import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import appointmentApis from "../apis/appointmentApis";
import { TAppointment } from "../types/appointment";

const useGetAppointments = () => {
  const [list, setList] = useState<TAppointment[]>([]);

  const { data, ...query } = useQuery({
    queryKey: ["appointments"],
    queryFn: () => {
      return appointmentApis.getAll();
    },
  });

  useEffect(() => {
    if (data) {
      setList(data.data);
    }
  }, [data]);

  return {
    data: list,
    setData: setList,
    ...query,
  };
};

export { useGetAppointments };
