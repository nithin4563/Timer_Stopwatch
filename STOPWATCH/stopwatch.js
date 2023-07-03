let time_in_seconds = 00;
let time_in_tens_of_seconds = 00;
let time_in_minutes = 00;

let display_seconds = document.querySelector('.seconds');
let display_tens_of_seconds = document.querySelector('.tens');
let display_minutes = document.querySelector('.mins');

let btn_start = document.querySelector('.btn-start');
let btn_stop = document.querySelector('.btn-stop');
let btn_reset = document.querySelector('.btn-reset');

let timer_interval;

btn_start.addEventListener('click', () => {
    clearInterval(timer_interval);
    timer_interval = setInterval(startTimer, 10);
});

btn_stop.addEventListener('click', () => {
    clearInterval(timer_interval);
});

btn_reset.addEventListener('click', () => {
    clearInterval(timer_interval);
    time_in_seconds = 00;
    time_in_tens_of_seconds = 00;
    time_in_minutes = 00;
    display_seconds.innerHTML = time_in_seconds;
    display_tens_of_seconds.innerHTML = time_in_tens_of_seconds;
    display_minutes.innerHTML = time_in_minutes;
});

function startTimer() {
    time_in_tens_of_seconds++;
    if (time_in_tens_of_seconds <= 9) {
        display_tens_of_seconds.innerHTML = '0' + time_in_tens_of_seconds;
    }
    if (time_in_tens_of_seconds > 9) {
        display_tens_of_seconds.innerHTML = time_in_tens_of_seconds;
    }
    if (time_in_tens_of_seconds > 99) {
        time_in_seconds++;
        display_seconds.innerHTML = '0' + time_in_seconds;
        time_in_tens_of_seconds = 0;
        display_tens_of_seconds.innerHTML = '0' + 0;
    }
    if (time_in_seconds > 9) {
        display_seconds.innerHTML = time_in_seconds;
    }
    if (time_in_seconds > 59) {
        time_in_minutes++;
        display_minutes.innerHTML = '0' + time_in_minutes;
        time_in_seconds = 0;
        display_seconds.innerHTML = '0' + 0;
    }
    if (time_in_minutes > 9) {
        display_seconds.innerHTML = time_in_minutes;
    }
}