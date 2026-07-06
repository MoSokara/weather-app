// Components
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/errorScreen";

// Hooks
import { useTranslation } from "react-i18next";
import { useTheme } from "./contexts/ThemeContext";
import { useCity } from "./contexts/CityContext";
import useWeather from "./hooks/useWeather";

function App() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const { city } = useCity();
  const { weather, loading, error } = useWeather(city);

  const styles = {
    layout: "min-h-screen md:flex md:justify-center md:items-center",
    font: i18n.resolvedLanguage === "en" ? "font-en" : "font-ar",
    color: {
      light:
        "bg-blue-600 text-white md:bg-gradient-to-b md:from-sky-200 md:via-sky-100 md:to-blue-50",
      dark: "dark:bg-slate-800 dark:text-slate-50 dark:md:bg-gradient-to-b dark:md:from-slate-950 dark:md:via-slate-900 dark:md:to-slate-800 dark:md:text-slate-50",
    },
  };

  // Loading Handler
  if (loading) {
    return (
      <div
        className={`${theme} ${styles.font} ${styles.color.dark} ${styles.color.light} ${styles.layout}`}
      >
        <LoadingScreen />
      </div>
    );
  }

  // Error Handler
  if (error) {
    return (
      <div
        className={`w-full flex justify-center items-center ${theme} ${styles.font} ${styles.color.dark} ${styles.color.light} ${styles.layout}`}
      >
        <ErrorScreen error={error} />
      </div>
    );
  }

  // Main Render
  return (
    <div
      className={`${theme} ${styles.font} ${styles.color.dark} ${styles.color.light} ${styles.layout}`}
    >
      <Container>
        <Header />
        <Main weather={weather} />
      </Container>
    </div>
  );
}

export default App;
