import { format as formatDateFNS } from "date-fns";
import { enGB } from "date-fns/locale";

import { FORMATS } from "./constants";

export const format = (date: Date, newFormat: FORMATS) => {
  return formatDateFNS(new Date(date), newFormat, { locale: enGB });
};
