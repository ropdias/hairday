import { apiConfig } from './api-config.js';

export async function scheduleCancel({ id }) {
  console.log(id);
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    alert('Agendamento cancelado com sucesso !');
  } catch (error) {
    console.log(error);
    alert('Não foi possível cancelar o agendamento.');
  }
}
