export function hoursClick() {
  const availableHours = document.querySelectorAll('.hour-available');

  availableHours.forEach((availableHour) => {
    availableHour.addEventListener('click', (selected) => {
      // Removing hour-selected class from every li not selected
      availableHours.forEach((availableHour) => {
        availableHour.classList.remove('hour-selected');
      });

      // Adding class hour-selected in the clicked li
      selected.target.classList.add('hour-selected');
    });
  });
}
