import dayjs from 'dayjs';

export function scheduleFetchByDayLocalStorage({ date }) {
  try {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const dailySchedules = schedules.filter((schedule) =>
      dayjs(date).isSame(dayjs(schedule.when), 'day')
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert('Não foi possível buscar os agendamentos do dia selecionado.');
  }
}
