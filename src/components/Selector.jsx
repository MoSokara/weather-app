import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import cities from "../data/cities.json";

function Selector() {
  const { t, i18n } = useTranslation();

  const render = cities.cities.map((city) => (
    <option
      className="bg-gray-800 text-white"
      key={city.replace(" ", "_")}
      value={city}
    >
      {t(`cities.${city.toLowerCase().replace(" ", "_")}`)}
    </option>
  ));

  return (
    <div className="relative mx-auto mb-3">
      <select
        className="
          w-fit
          appearance-none
          rounded-lg
          px-4
          py-2
          pr-10
          text-2xl
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          hover:bg-white/20
        "
      >
        {render}
      </select>

      <FontAwesomeIcon
        icon={faChevronDown}
        className="
          pointer-events-none
          absolute
          rtl:left-3
          ltr:right-3
          top-1/2
          -translate-y-1/2
          text-gray-500
        "
      />
    </div>
  );
}

export default Selector;
