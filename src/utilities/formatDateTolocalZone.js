import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (dateTimeString) => {
  // Convertir la cadena de fecha a un objeto Date
  const dateUTC = new Date(dateTimeString);

  // Obtener el desplazamiento de la zona horaria del cliente
  const offsetMinutes = dateUTC.getTimezoneOffset();

  // Aplicar el desplazamiento de la zona horaria para obtener la fecha y hora local
  const dateLocal = new Date(dateUTC.getTime() - offsetMinutes * 60000);

  // Formatear la fecha local
  const formattedDate = format(
    dateLocal,
    "'el' do 'de' MMMM yyyy 'a las' HH:mm",
    {
      locale: es,
    }
  );

  return formattedDate;
};
