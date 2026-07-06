import { createContext, useContext, useState, useEffect } from "react";

const CityContext = createContext({});

export function CityProvider({ children }) {
  const [city, setCity] = useState(localStorage.getItem("city") ?? "Gaza");

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCity() {
  return useContext(CityContext);
}
