import dayjs from 'dayjs';

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

// Current date to format input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Load current date and define minimum date as current date
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert('Informe o nome do client!');
    }

    const hourSelected = document.querySelector('.hour-selected');

    if (!hourSelected) {
      return alert('Selecione a hora!');
    }

    const [hour] = hourSelected.innerText.split(':');

    const when = dayjs(selectedDate.value).add(hour, 'hour');

    const id = new Date().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert('Não foi possível realizar o agendamento.');
    console.log(error);
  }
};
