import { t } from "@lingui/macro";

export function getDisplayDate(
  year: number,
  month: number,
  day: number
): string {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  const compDate = new Date(year, month - 1, day);
  const diff = today.getTime() - compDate.getTime();
  if (compDate.getTime() === today.getTime()) {
    return t`Today`;
  } else if (diff <= 24 * 60 * 60 * 1000) {
    return t`Yesterday`;
  } else {
    return compDate.toDateString();
  }
}

export function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
