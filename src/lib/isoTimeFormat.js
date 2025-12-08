// simple formatter: accepts "HH:mm" or "YYYY-MM-DDTHH:mm:ss" and returns "HH:MM AM/PM" or "HH:MM"
export default function isoTimeFormat(input) {
  if (!input) return "";
  // if already HH:mm (like "06:30"), return with AM/PM
  if (/^\d{2}:\d{2}$/.test(input)) {
    const [hh, mm] = input.split(":").map(Number);
    const suffix = hh >= 12 ? "PM" : "AM";
    const h = ((hh + 11) % 12) + 1;
    return `${h}:${String(mm).padStart(2, "0")} ${suffix}`;
  }

  // try ISO full string
  const d = new Date(input);
  if (isNaN(d)) return input;
  let hours = d.getHours();
  const mins = String(d.getMinutes()).padStart(2, "0");
  const suffix = hours >= 12 ? "PM" : "AM";
  hours = ((hours + 11) % 12) + 1;
  return `${hours}:${mins} ${suffix}`;
}
