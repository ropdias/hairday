import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';
import { hoursClick } from './hours-click.js';

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

    if (hour === '9:00') {
      hourHeaderAdd('Manhã');
    } else if (hour === '13:00') {
      hourHeaderAdd('Tarde');
    } else if (hour === '18:00') {
      hourHeaderAdd('Noite');
    }

    hours.append(li);
  });

  // Adding event click in available hours
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement('li');
  header.classList.add('hour-period');
  header.textContent = title;

  hours.append(header);
}
