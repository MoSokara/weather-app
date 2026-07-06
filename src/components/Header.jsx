// Components
import Button from "./Button";

// Icons (Fontawsome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faMoon,
  faSun,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  // Handles
  function handleThemeButton() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleLangButton() {
    i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ar" : "en");
  }

  const styles = {
    base: "md:rounded-t-md p-3",
    layout: "flex justify-between items-center",
    colors: "bg-blue-700 text-amber-50 dark:bg-slate-900",
  };

  return (
    <div className={`${styles.base} ${styles.layout} ${styles.colors}`}>
      <h1 className="md:text-2xl">
        <FontAwesomeIcon icon={faCloudSun} /> Weather App
      </h1>
      <div className="flex gap-2">
        <Button onClick={handleLangButton}>
          <FontAwesomeIcon icon={faLanguage} />{" "}
          {i18n.resolvedLanguage === "en" ? "EN" : "AR"}
        </Button>
        <Button onClick={handleThemeButton}>
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />{" "}
          {theme === "dark" ? "Light" : "Dark"}
        </Button>
      </div>
    </div>
  );
}

export default Header;
