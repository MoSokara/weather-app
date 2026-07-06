export default function parseTime(time) {
  if (!time) return null;

  const [clock, period] = time.trim().split(" ");

  let [hours, minutes] = clock.split(":").map(Number);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return date;
}
