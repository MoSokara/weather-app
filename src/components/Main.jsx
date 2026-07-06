import Divider from "./Divider";
import Button from "./Button";
// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faCloud,
  faUmbrella,
  faTemperatureHalf,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faSun,
  faMoon,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

import numFormat from "../utilities/numberFormater";
import dateFormat from "../utilities/dateFormater";
import Selector from "./Selector";

function Main() {
  const { t, i18n } = useTranslation();
  const dir = i18n.resolvedLanguage === "ar" ? "rtl" : "ltr";

  // console.log(new Intl.DateTimeFormat("ar-EG").format(new Date()));

  // console.log(numFormat(16, i18n.language));

  return (
    <div
      dir={dir}
      className="md:w-200 p-4 md:bg-blue-600 text-white dark:md:bg-slate-800 dark:text-slate-50 rounded-b-md"
    >
      <div className="flex flex-col-reverse md:flex-row md:gap-30 justify-center items-center">
        <div className="w-full text-center flex-3">
          <div className="hidden md:block mb-3 text-center">
            {/* <h3 className="font-semibold text-3xl mb-3">Cairo, Egypt</h3> */}
            <Selector />
            <p>
              {dateFormat(new Date(), i18n.language, "weekday")} |{" "}
              {dateFormat(new Date(), i18n.language)} |{" "}
              {dateFormat(new Date(), i18n.language, "time")}
            </p>
          </div>
          <div className="-mt-10 mb-2 md:m-0">
            <h2 className="flex justify-center">
              <span className="font-bold text-9xl">
                {numFormat(16, i18n.language, "celsius")}
              </span>
            </h2>
            <h3 className="font-semibold text-3xl">Sunny</h3>
          </div>
        </div>
        <img
          className="w-full flex-2"
          src="https://cdn.weatherapi.com/weather/128x128/day/116.png"
          alt="{weather condition} Image or صورة"
        />
        <div className="md:hidden text-center">
          <Selector />
          <p>
            {dateFormat(new Date(), i18n.language, "weekday")} |{" "}
            {dateFormat(new Date(), i18n.language)} |{" "}
            {dateFormat(new Date(), i18n.language, "time")}
          </p>
        </div>
      </div>
      <div>
        <Divider />
        <div className="grid grid-cols-2 gap-2">
          <span>
            <FontAwesomeIcon icon={faDroplet} /> {t("humidity")}:{" "}
            {numFormat(16, i18n.language, "percent")}
          </span>
          <span>
            <FontAwesomeIcon icon={faTemperatureHalf} /> {t("feelLike")}:{" "}
            {numFormat(33, i18n.language, "celsius")}
          </span>
          <span>
            <FontAwesomeIcon icon={faTemperatureArrowUp} /> {t("high")}:{" "}
            {numFormat(33, i18n.language, "celsius")}
          </span>
          <span>
            <FontAwesomeIcon icon={faTemperatureArrowDown} /> {t("low")}:{" "}
            {numFormat(33, i18n.language, "celsius")}
          </span>
          <span>
            <FontAwesomeIcon icon={faSun} /> {t("sunset")}:{" "}
            {dateFormat(new Date(), i18n.language, "time")}
          </span>
          <span>
            <FontAwesomeIcon icon={faMoon} /> {t("sunrise")}:{" "}
            {dateFormat(new Date(), i18n.language, "time")}
          </span>
          <span>
            <FontAwesomeIcon icon={faCloud} /> {t("cloud")}:{" "}
            {numFormat(16, i18n.language, "percent")}
          </span>
          <span>
            <FontAwesomeIcon icon={faUmbrella} /> {t("rain")}:{" "}
            {numFormat(16, i18n.language, "percent")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
