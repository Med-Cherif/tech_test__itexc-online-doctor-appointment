/* eslint-disable @typescript-eslint/no-explicit-any */
// import

import { toast, TypeOptions } from "react-toastify";

// const x: TypeOptions = ""

export default function toastAlert(
  message: React.ReactNode,
  type: TypeOptions = "success",
  options = {}
) {
  return (toast as any)[type](message, {
    theme: "colored",
    autoClose: 3000,
    ...options,
  });
}
