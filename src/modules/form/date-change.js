import { schedulesDay } from '../schedules/load';

const selectedDate = document.getElementById('date');

selectedDate.onchange = async () => await schedulesDay();
