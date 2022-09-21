export const isError = (errors: { [key: string]: any }) => {
  return Object.keys(errors).length > 0;
};
