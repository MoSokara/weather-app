export default function dateFormat(date, lang, type = "") {
  const local = lang === "en" ? "en-US" : "ar-EG";

  // Options
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const weekdayOptions = {
    weekday: "long",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const option =
    type === "weekday"
      ? weekdayOptions
      : type === "time"
        ? timeOptions
        : defaultOptions;

  return new Intl.DateTimeFormat(local, option).format(date);
}
