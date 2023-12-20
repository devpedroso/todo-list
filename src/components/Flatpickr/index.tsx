import * as S from "./styles";

import "flatpickr/dist/themes/dark.css";
import FlatpickrComponent from "react-flatpickr";

import { Portuguese } from "flatpickr/dist/l10n/pt";

export function Flatpickr({ ...props }) {
  return (
    <S.Container>
      <FlatpickrComponent
        className="flatPickr"
        data-enable-time
        options={{
          dateFormat: "d/m/Y H:i",
          time_24hr: true,
          locale: Portuguese,
          minDate: new Date().toISOString(),
        }}
        {...props}
      />

      <S.CalendarBlank size={24} />
    </S.Container>
  );
}
