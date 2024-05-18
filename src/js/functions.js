import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import countries from "i18n-iso-countries";

countries.registerLocale(require("i18n-iso-countries/langs/es.json"));

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = parseISO(dateString);
  return `${format(date, 'dd \'de\' MMMM \'del\' yyyy', { locale: es })}`;
};

export const countryName = (countryCode) => {
  const countryCodeString = Array.isArray(countryCode) ? countryCode[0] : countryCode;
  const countryName = countries.getName(countryCodeString, "es");
  return countryName || 'Desconocido';
};
