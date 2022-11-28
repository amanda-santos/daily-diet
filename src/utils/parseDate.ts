import { parse } from "date-fns";
import { enGB } from "date-fns/locale";

export const parseDate = (date: string) => {
  return parse(date, "dd/mm/yy", new Date(), { locale: enGB });
};
