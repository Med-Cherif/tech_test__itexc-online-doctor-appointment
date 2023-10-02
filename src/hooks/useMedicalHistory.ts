import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import medicalHistoryApis from "../apis/medicalHistoryApis";
import { TMedicalReport } from "../types/medicalReport";

const useMedicalHistory = () => {
  const [list, setList] = useState<TMedicalReport[]>([]);

  const { data, ...query } = useQuery({
    queryKey: ["medical-history"],
    queryFn: () => {
      return medicalHistoryApis.getAll();
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

export { useMedicalHistory };
