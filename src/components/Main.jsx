// Components
import Selector from "./Selector";
import Divider from "./Divider";

// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faCloud,
  faUmbrella,
  faTemperatureHalf,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useTranslation } from "react-i18next";

// Utilities
import numFormat from "../utilities/numberFormater";
import dateFormat from "../utilities/dateFormater";
import parseTime from "../utilities/parseTime";

function Main({ weather }) {
  const { t, i18n } = useTranslation();
  const dir = i18n.resolvedLanguage === "ar" ? "rtl" : "ltr";

  const styles = {
    base: "md:w-200 p-4 rounded-b-md",
    color: "md:bg-blue-600 text-white dark:md:bg-slate-800 dark:text-slate-50",
    detail: "flex items-center gap-2 md:text-2xl",
  };

  return (
    <div dir={dir} className={`${styles.base} ${styles.color}`}>
      {/* Main Info Section */}
      <section className="flex flex-col-reverse md:flex-row md:gap-30 justify-center items-center">
        <div className="w-full text-center flex-3">
          <div className="hidden md:block mb-3 text-center">
            <Selector />
            <p className="text-lg">
              {dateFormat(new Date(weather?.date), i18n.language, "weekday")} |{" "}
              {dateFormat(new Date(weather?.date), i18n.language)} |{" "}
              {dateFormat(new Date(weather?.date), i18n.language, "time")}
            </p>
          </div>
          <div className="-mt-10 mb-2 md:m-0">
            <h2 className="flex justify-center">
              <span className="font-bold mb-3 text-7xl md:text-8xl">
                {numFormat(weather?.temp, i18n.language, "celsius")}
              </span>
            </h2>
            <h3 className="font-semibold text-3xl">{weather?.description}</h3>
          </div>
        </div>

        {/* Weather Description Image */}
        <img
          className="w-full flex-2"
          src={`https:${weather?.image?.replace("64x64", "128x128")}`}
          alt={weather?.description}
        />

        {/* Mobile Responsive Section */}
        <section className="md:hidden text-center">
          <Selector />
          <p className="text-lg">
            {dateFormat(new Date(weather?.date), i18n.language, "weekday")} |{" "}
            {dateFormat(new Date(weather?.date), i18n.language)} |{" "}
            {dateFormat(new Date(weather?.date), i18n.language, "time")}
          </p>
        </section>
      </section>

      {/* Details Section */}
      <div>
        <Divider />
        <section className="grid grid-cols-2 gap-2">
          {/* Humidity  */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faDroplet} /> {t("humidity")}:{" "}
            {numFormat(weather?.details.humidity, i18n.language, "percent")}
          </span>

          {/* Feel Like */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faTemperatureHalf} /> {t("feelLike")}:{" "}
            {numFormat(weather?.details.feelLike, i18n.language, "celsius")}
          </span>

          {/* High Temp */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faTemperatureArrowUp} /> {t("high")}:{" "}
            {numFormat(weather?.details.high, i18n.language, "celsius")}
          </span>

          {/* Low Temp */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faTemperatureArrowDown} /> {t("low")}:{" "}
            {numFormat(weather?.details.low, i18n.language, "celsius")}
          </span>

          {/* Sunset */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faMoon} /> {t("sunset")}:{" "}
            {dateFormat(
              parseTime(weather?.details.sunset),
              i18n.language,
              "time",
            )}
          </span>

          {/* Sunrise */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faSun} /> {t("sunrise")}:{" "}
            {dateFormat(
              parseTime(weather?.details.sunrise),
              i18n.language,
              "time",
            )}
          </span>

          {/* Clouds */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faCloud} /> {t("clouds")}:{" "}
            {numFormat(weather?.details.cloud, i18n.language, "percent")}
          </span>

          {/* Rain */}
          <span className={styles.detail}>
            <FontAwesomeIcon icon={faUmbrella} /> {t("rain")}:{" "}
            {numFormat(weather?.details.rain, i18n.language, "percent")}
          </span>
        </section>
      </div>
    </div>
  );
}

export default Main;
