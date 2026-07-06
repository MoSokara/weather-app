import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.jsx";

// Providers
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { CityProvider } from "./contexts/CityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </ThemeProvider>
  </StrictMode>,
);
