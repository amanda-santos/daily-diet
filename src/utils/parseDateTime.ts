import { parse } from "date-fns";
import { enGB } from "date-fns/locale";

export const parseDateTime = (dateTime: string) => {
  return parse(dateTime, "dd/MM/yyyy HH:mm", new Date(), { locale: enGB });
};
