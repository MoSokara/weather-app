export default function numFormat(number, lang, type = "") {
  const local = lang === "en" ? "en-US" : "ar-EG";

  // Options
  const defaultOptions = {
    style: "decimal",
  };
  const celsiusOptions = {
    style: "unit",
    unit: "celsius",
  };
  const percentOptions = {
    style: "unit",
    unit: "percent",
  };
  const option =
    type === "celsius"
      ? celsiusOptions
      : type === "percent"
        ? percentOptions
        : defaultOptions;

  return new Intl.NumberFormat(local, option).format(number);
}
