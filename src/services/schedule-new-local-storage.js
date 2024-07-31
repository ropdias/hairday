export function scheduleNewLocalStorage({ id, name, when }) {
  try {
    let schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push({ id, name, when });
    localStorage.setItem('schedules', JSON.stringify(schedules));

    alert('Agendamento realizado com sucesso!');
  } catch (error) {
    console.log(error);
    alert('Não foi possível agendar. Tente novamente mais tarde.');
  }
}
