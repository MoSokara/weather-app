// Components
import Container from "./components/Container";
import Header from "./components/Header";
import Button from "./components/Button";
import Main from "./components/Main";
import LoadingScreen from "./components/LoadingScreen";
import Details from "./components/Details";

// Hooks
import { useTranslation } from "react-i18next";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const dir = i18n.resolvedLanguage === "ar" ? "rtl" : "ltr";
  const styles = {
    layout: "min-h-screen md:flex md:justify-center md:items-center",
    font: i18n.resolvedLanguage === "en" ? "font-en" : "font-ar",
    color: {
      light:
        "bg-blue-600 text-white md:bg-gradient-to-b md:from-sky-200 md:via-sky-100 md:to-blue-50",
      dark: "dark:bg-slate-800 dark:text-slate-50 dark:md:bg-gradient-to-b dark:md:from-slate-950 dark:md:via-slate-900 dark:md:to-slate-800 dark:md:text-slate-50",
    },
  };

  // const loading = true;
  // if (loading) {
  //   return <LoadingScreen />;
  // }

  return (
    <div
      className={`relative ${theme} ${styles.font} ${styles.color.dark} ${styles.color.light} ${styles.layout}`}
    >
      <Container>
        <Header />
        <Main />
        {/* <Details /> */}
      </Container>
    </div>
  );
}

export default App;
