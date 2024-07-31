import { scheduleNewAPI } from './schedule-new-api';
import { scheduleNewLocalStorage } from './schedule-new-local-storage';
import { useAPI } from './api-config';

export async function scheduleNew(data) {
  if (useAPI) {
    return scheduleNewAPI(data);
  } else {
    return scheduleNewLocalStorage(data);
  }
}
