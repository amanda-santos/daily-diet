import { parse } from "date-fns";
import { enGB } from "date-fns/locale";

export const parseTime = (time: string) => {
  return parse(time, "HH:mm", new Date(), { locale: enGB });
};
