import { hoursLoad } from '../form/hours-load.js';
import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';

const selectedDate = document.getElementById('date');

export async function schedulesDay() {
  // Getting input date
  const date = selectedDate.value;

  // Getting data from the API
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  // Rendering opening hours
  hoursLoad({ date });
}
