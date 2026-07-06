// Libraries
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function useWeather(q) {
  const BASE_URL = import.meta.env.VITE_BASE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { i18n } = useTranslation();

  const [response, setResponse] = useState({
    date: null,
    temp: null,
    description: null,
    image: null,
    details: {
      humidity: null,
      feelLike: null,
      high: null,
      low: null,
      sunset: null,
      sunrise: null,
      cloud: null,
      rain: null,
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!q) return;

    const controller = new AbortController();

    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(BASE_URL, {
          params: {
            key: API_KEY,
            q,
            days: 1,
            aqi: "no",
            alerts: "no",
            lang: i18n.language,
          },
          signal: controller.signal,
        });
        const resData = res.data;

        setResponse({
          date: resData.location.localtime,
          temp: resData.current.temp_c,
          description: resData.current.condition.text,
          image: resData.current.condition.icon,
          details: {
            humidity: resData.current.humidity,
            feelLike: resData.current.feelslike_c,
            high: resData.forecast.forecastday[0].day.maxtemp_c,
            low: resData.forecast.forecastday[0].day.mintemp_c,
            sunset: resData.forecast.forecastday[0].astro.sunset,
            sunrise: resData.forecast.forecastday[0].astro.sunrise,
            cloud: resData.current.cloud,
            rain: resData.forecast.forecastday[0].day.daily_chance_of_rain,
          },
        });
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [q, i18n.language, API_KEY, BASE_URL]);

  return {
    weather: response,
    loading,
    error,
  };
}

export default useWeather;
