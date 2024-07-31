import { scheduleFetchByDayAPI } from './schedule-fetch-by-day-api';
import { scheduleFetchByDayLocalStorage } from './schedule-fetch-by-day-local-storage';
import { useAPI } from './api-config';

export async function scheduleFetchByDay(data) {
  if (useAPI) {
    return scheduleFetchByDayAPI(data);
  } else {
    return scheduleFetchByDayLocalStorage(data);
  }
}
