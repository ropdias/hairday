export function scheduleCancelLocalStorage({ id }) {
  try {
    let schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules = schedules.filter((schedule) => schedule.id !== id);
    localStorage.setItem('schedules', JSON.stringify(schedules));

    alert('Agendamento cancelado com sucesso!');
  } catch (error) {
    console.log(error);
    alert('Não foi possível cancelar o agendamento.');
  }
}
