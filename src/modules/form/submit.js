import dayjs from 'dayjs';

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

// Current date to format input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Load current date and define minimum date as current date
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
};
