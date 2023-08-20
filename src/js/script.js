const second = document.querySelector('.number-sec');
const minute = document.querySelector('.number-minutes');
const hour = document.querySelector('.number-hours');
const day = document.querySelector('.number-days');


function countDown(sec, min, hours, days) {
  let countSec = sec;
  let countMin = min;
  let countHours = hours;
  let countDays = days;

  const interval = setInterval(() => {
    countSec--;

    if (countSec < 0) {
      countMin--;
      countSec = 59; // Reset seconds to 59 after reaching 0
    }
    if (countMin < 0) {
      countHours--;
      countMin = 59;
    }
    if (countHours < 0) {
      countDays--;
      countHours = 23;
    }
    if (countDays < 0) {
      clearInterval(interval);
      return;
    }
    second.innerHTML = countSec < 10 ? `0${countSec}` : countSec;
    minute.innerHTML = countMin < 10 ? `0${countMin}` : countMin;
    hour.innerHTML = countHours < 10 ? `0${countHours}` : countHours;
    day.innerHTML = countDays < 10 ? `0${countDays}` : countDays;
  }, 1000);
}

countDown(45, 55, 23, 8);


