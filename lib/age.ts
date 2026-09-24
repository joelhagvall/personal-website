import { PERSON } from "@/data/site";

const TIME_ZONE = "Europe/Stockholm";

// Calendar date and time of day in Stockholm, whatever the visitor's time zone
function stockholmParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value);
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minute: get("minute"),
    second: get("second"),
  };
}

/** Age in whole years; goes up at 00:00 Stockholm time on the birthday */
export function getAge(now: Date = new Date()): number {
  const { year, month, day } = stockholmParts(now);
  const { birthDate } = PERSON;
  const hadBirthday =
    month > birthDate.month || (month === birthDate.month && day >= birthDate.day);
  return year - birthDate.year - (hadBirthday ? 0 : 1);
}

/** Milliseconds until the next midnight in Stockholm */
export function msUntilStockholmMidnight(now: Date = new Date()): number {
  const { hour, minute, second } = stockholmParts(now);
  const elapsed = ((hour * 60 + minute) * 60 + second) * 1000 + now.getMilliseconds();
  return 24 * 60 * 60 * 1000 - elapsed;
}
