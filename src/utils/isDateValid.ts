import { isValid } from "date-fns";

export const isDateValid = (date: Date) => {
  const isValidDate = isValid(date);

  console.log("isDateValid", isValidDate, date);

  return isValidDate;
};
