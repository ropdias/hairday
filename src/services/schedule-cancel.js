import { scheduleCancelAPI } from './schedule-cancel-api';
import { scheduleCancelLocalStorage } from './schedule-cancel-local-storage';
import { useAPI } from './api-config';

export async function scheduleCancel(data) {
  if (useAPI) {
    return scheduleCancelAPI(data);
  } else {
    return scheduleCancelLocalStorage(data);
  }
}
