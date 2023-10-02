import { TObject } from "../types/TObject";

export default function parseParams(url: string) {
  const object: TObject = {};

  url = url[0] === "?" ? url.slice(1) : url;

  const params = url.split("&").map((param) => param.split("="));

  params.forEach((param) => {
    const [key, value] = param;
    object[key] = value;
  });

  return object;
}
