import { toDays, toHours, toMinutes } from '../../../helpers/date';

/**
 * @description returns a string respresent the seconds by a given conitions
 * @param date the time we want to map
 * @param createdAt the date in which the message was sent
 */
export const mapSecondsToString = (date: number, createdAt?: string) => {
  const minutes = toMinutes(date);
  const hours = toHours(date);
  const days = toDays(date);

  if (days) {
    if (days <= 7) {
      return `${days} day${days === 1 ? '' : 's'}`;
    }
    return new Date(createdAt!).toDateString();
  } else if (hours) {
    return `${hours} hour${hours === 1 ? '' : 's'}`;
  } else if (minutes) {
    return `${minutes} min`;
  } else {
    return 'now';
  }
};
