import { TObject } from "../types/TObject";

export default function handleFormData(data: TObject) {
  const formData = new FormData();

  Object.keys(data).map((key) => {
    const value = data[key];

    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });

  return formData;
}
