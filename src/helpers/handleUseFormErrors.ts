/* eslint-disable @typescript-eslint/no-explicit-any */
export function handleUseFormErrors(errors: any) {
  const errorsResult: { [prop: string]: string } = {};
  Object.keys(errors || {}).forEach((key) => {
    errorsResult[key] = errors?.[key]?.message;
  });

  return errorsResult;
}
