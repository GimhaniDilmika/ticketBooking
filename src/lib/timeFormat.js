// src/lib/timeFormat.js
export function timeFormat(input) {
  if (input == null || input === "") return "";

  if (typeof input === "string" && /\d+\s*h/.test(input)) return input;

  const m = String(input).match(/\d+/);
  if (!m) return String(input);

  const mins = parseInt(m[0], 10);
  if (isNaN(mins)) return String(input);

  const hrs = Math.floor(mins / 60);
  const rem = mins % 60;

  if (hrs > 0 && rem > 0) return `${hrs}h ${rem}m`;
  if (hrs > 0) return `${hrs}h`;
  return `${rem}m`;
}
