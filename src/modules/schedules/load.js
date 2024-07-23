import { hoursLoad } from '../form/hours-load.js';

const selectedDate = document.getElementById('date');

export function schedulesDay() {
  // Getting input date
  const date = selectedDate.value;

  // Rendering opening hours
  hoursLoad({ date });
}
