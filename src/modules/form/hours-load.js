import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';

const hours = document.getElementById('hours');

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

  // Rendering hours
  opening.forEach(({ hour, available }) => {
    const li = document.createElement('li');

    li.classList.add('hour');
    li.classList.add(available ? 'hour-available' : 'hour-unavailable');

    li.textContent = hour;
    hours.append(li);
  });
}
