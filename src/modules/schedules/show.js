import dayjs from 'dayjs';

const periodMorning = document.getElementById('period-morning');
const periodAfternoon = document.getElementById('period-afternoon');
const periodNight = document.getElementById('period-night');

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = '';
    periodAfternoon.innerHTML = '';
    periodNight.innerHTML = '';

    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li');
      const time = document.createElement('strong');
      const name = document.createElement('span');

      // Inserting schedule id
      item.setAttribute('data-id', schedule.id);

      time.textContent = dayjs(schedule.when).format('HH:mm');
      name.textContent = schedule.name;

      // Creating cancel schedule icon
      const cancelIcon = document.createElement('img');
      cancelIcon.classList.add('cancel-icon');
      cancelIcon.setAttribute('src', './assets/cancel.svg');
      cancelIcon.setAttribute('alt', 'Cancelar');

      // Adding time, name and icon in the item:
      item.append(time, name, cancelIcon);

      // Getting only the hour
      const hour = dayjs(schedule.when).hour();

      // Rendering schedule based on the hour
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch {
    alert('Não foi possível exibir os agendamentos!');
    console.log(error);
  }
}
