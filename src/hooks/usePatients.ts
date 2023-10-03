import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { TPatient } from "../types/patient";
import patientApis from "../apis/patientApis";

const usePatients = () => {
  const [list, setList] = useState<TPatient[]>([]);

  const { data, ...query } = useQuery({
    queryKey: ["medical-history"],
    queryFn: () => {
      return patientApis.getAll();
    },
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return {
    data: list,
    ...query,
  };
};

export { usePatients };
