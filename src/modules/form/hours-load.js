import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Getting only the hour:
    const [scheduleHour] = hour.split(':');

    // Adding hour inside date and checking if it's in the past
    const available = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs());

    return {
      hour,
      available,
    };
  });

  console.log(opening);
}
