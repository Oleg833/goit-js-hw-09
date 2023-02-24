// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let timerId = null;
// let futureTimerId = null;
let futureTime = 0;

const btnStartTimer = document.querySelector('button[data-start]');
const dayRemaining = document.querySelector('.value[data-days]');
const hourRemaining = document.querySelector('.value[data-hours]');
const minRemaining = document.querySelector('.value[data-minutes]');
const secRemaining = document.querySelector('.value[data-seconds]');

btnStartTimer.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minDate: 'today',
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureTime = selectedDates[0].getTime();
    clearInterval(timerId);
    setMainTimer(0);
    // if (futureTime - Date.now() <= 0) {
    //   alert('Please choose a future date!');
    // }
    futureTime - Date.now() <= 0
      ? (alert('Please choose a date in the future'),
        (btnStartTimer.disabled = true))
      : (btnStartTimer.disabled = false);
  },
};

flatpickr('#datetime-picker', options);

btnStartTimer.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  btnStartTimer.disabled = true;
  // console.log(`futureTime - realTime == `, futureTime - Date.now());
  timerId = setInterval(setRemaining, 1000);
}

function setRemaining() {
  const realTime = Date.now();
  const timeRemaining = futureTime - realTime;
  // if (timeRemaining > 0) {
  //   // console.log(`futureTime =`, futureTime);
  //   // console.log(`realTime =`, realTime);
  //   // console.log(`realDate = `, new Date());
  //   // console.log(`timeRemaining =`, timeRemaining);
  //   console.log(setMainTimer(timeRemaining));
  // } else {
  //   clearInterval(timerId);
  //   // clearInterval(futureTimerId);
  //   btnStartTimer.disabled = true;
  // }
  console.log(`timeRemaining(ms) = `, timeRemaining);
  timeRemaining > 0
    ? console.log(setMainTimer(timeRemaining))
    : (clearInterval(timerId), (btnStartTimer.disabled = true));
}

function setMainTimer(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  dayRemaining.textContent = addLeadingZero(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);

  hourRemaining.textContent = addLeadingZero(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);

  minRemaining.textContent = addLeadingZero(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  secRemaining.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

// futureTimerId = setInterval(unLockBtn, 1000);

// function unLockBtn() {
//   const realTime = Date.now();
//   const timeRemaining = futureTime - realTime;
//   if (timeRemaining > 0) {
//     btnStartTimer.disabled = false;
//     console.log(`realTime =`, realTime);
//   }
// }

// let test = Date.now();
// console.log(`TestTime =`, test);

// console.log(setMainTimer(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(setMainTimer(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(setMainTimer(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// const myInput = document.querySelector('.time-picker');
// flatpickr('.time-picker', options);
// flatpickr(myInput, options);

// console.log(myFlat);
// console.log(`'test'`);
// const myTestFlat = flatpickr.parseDate('2016-10-20', 'Y-m-d');
// console.log(myTestFlat);
// console.log('Text 2');
