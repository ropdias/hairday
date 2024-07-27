import { schedulesDay } from './schedules/load.js';
document.addEventListener('DOMContentLoaded', async function () {
  await schedulesDay();
});
