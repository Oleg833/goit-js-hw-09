// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// const myInput = document.querySelector('.time-picker');
// flatpickr('.time-picker', options);
// flatpickr(myInput, options);
const myFlat = flatpickr('#datetime-picker', options);

console.log(myFlat);
// console.log(`'test'`);
// const myTestFlat = flatpickr.parseDate('2016-10-20', 'Y-m-d');
// console.log(myTestFlat);
// console.log('Text 2');
