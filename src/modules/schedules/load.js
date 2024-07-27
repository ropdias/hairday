import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';
import { schedulesShow } from './show.js';
import { hoursLoad } from '../form/hours-load.js';

const selectedDate = document.getElementById('date');

export async function schedulesDay() {
  // Getting input date
  const date = selectedDate.value;

  // Getting data from the API
  const dailySchedules = await scheduleFetchByDay({ date });

  // Rendering schedules
  schedulesShow({ dailySchedules });

  // Rendering opening hours
  hoursLoad({ date });
}
