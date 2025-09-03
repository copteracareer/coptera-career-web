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

export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const timeAgo = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  // Time units
  const secondsInMinute = 60;
  const secondsInHour = 60 * 60;
  const secondsInDay = 60 * 60 * 24;

  let timeAgo = "";

  if (diffInSeconds < secondsInMinute) {
    timeAgo = `${diffInSeconds} detik yang lalu`; // "x seconds ago"
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    timeAgo = `${minutes} menit yang lalu`; // "x minutes ago"
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    timeAgo = `${hours} jam yang lalu`; // "x hours ago"
  } else {
    const days = Math.floor(diffInSeconds / secondsInDay);
    timeAgo = `${days} Hari yang lalu`; // "x days ago"
  }

  return timeAgo;
};
