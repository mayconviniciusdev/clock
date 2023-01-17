let sElement = document.querySelector('.pointerSecond');
let mElement = document.querySelector('.pointerMinutes');
let hElement = document.querySelector('.pointerHours');

let hoursEl = document.querySelector('.hours');
let minutesEl= document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`; 

    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    hoursEl.textContent = hour;
    minutesEl.textContent = minute;
    secondsEl.textContent = second; }

function fixZero(time) { return time < 10 ? `0${time}` : time}
setInterval(updateClock, 1000);
updateClock();