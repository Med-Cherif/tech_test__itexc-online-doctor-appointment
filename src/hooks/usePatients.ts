import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { TPatient } from "../types/patient";
import patientApis from "../apis/patientApis";

const usePatients = () => {
  const [list, setList] = useState<TPatient[]>([]);

  const { data, ...query } = useQuery({
    queryKey: ["patients"],
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

const useGetOnePatient = <T>(id: string | number) => {
  const [item, setItem] = useState<T | null>(null);

  const { data, ...query } = useQuery({
    queryKey: ["patients", id],
    queryFn: () => {
      return patientApis.getOne(id);
    },
  });

  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data]);

  return {
    data: item,
    ...query,
  };
};

export { usePatients, useGetOnePatient };
