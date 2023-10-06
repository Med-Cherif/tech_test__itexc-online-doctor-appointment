import { UseFormSetError } from "react-hook-form";
import { TObject } from "../types/TObject";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractError(error: any) {
  return (
    error?.response?.data?.error ||
    error?.response?.data?.errors ||
    error?.response?.data?.message ||
    error?.message
  );
}

export function handleMultipleErrors({
  setError,
  setFormError,
  error,
}: {
  setError: (error: any) => void;
  setFormError: UseFormSetError<TObject>;
  error: any;
}) {
  const err = extractError(error);
  console.log({ err });
  if (typeof err === "string") {
    setError(err);
  } else {
    setFormErrors(err, setFormError);
  }
}

export function setFormErrors(errors: any, setError: UseFormSetError<TObject>) {
  Object.keys(errors).forEach((key) => {
    setError(key, { message: errors?.[key] });
  });
}
