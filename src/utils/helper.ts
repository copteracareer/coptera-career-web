import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const givenDate = new Date(date);

  const minutes = differenceInMinutes(now, givenDate);
  const hours = differenceInHours(now, givenDate);
  const days = differenceInDays(now, givenDate);
  const months = differenceInMonths(now, givenDate);
  const years = differenceInYears(now, givenDate);

  if (minutes < 60) {
    return `${minutes} menit yang lalu`;
  } else if (hours < 24) {
    return `${hours} jam yang lalu`;
  } else if (days < 30) {
    return `${days} hari yang lalu`;
  } else if (months < 12) {
    return `${months} bulan yang lalu`;
  } else {
    return `${years} tahun yang lalu`;
  }
};

export const shortenText = (text: string, length: number = 50): string => {
  return `${text.substring(0, length)}${text.length > length ? "..." : ""}`;
};
