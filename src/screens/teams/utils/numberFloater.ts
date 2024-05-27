export const numberFloater = (value: number) => {
  const decimal = value.toString().split(".");
  return !decimal[1] ? `${value}.0` : value;
};
