import { apiConfig } from './api-config.js';

export async function scheduleNewAPI({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, when }),
    });

    alert('Agendamento realizado com sucesso!');
  } catch (error) {
    console.log(error);
    alert('Não foi possível agendar. Tente novamente mais tarde.');
  }
}
