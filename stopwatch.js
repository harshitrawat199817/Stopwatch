// stopwatch code

let second = 0; // represents seconds in clock
let minutes = 0; // represents minutes in clock
let hours = 0; // represents hours in clock
var timer; // timer variable to store setInterval
let start = false; // flag to check if timer is running or not

const stopwatch = document.getElementById('stopwatch');

// creates the time element and label which shows time
const time = document.createElement('h1');
time.classList.add('time-heading');
time.textContent = `${hours} : ${minutes} : ${second}`; 

const label = document.createElement('h4');
label.classList.add('time-label');
label.textContent = 'HH  :  MM  :  SS';

stopwatch.appendChild(time);
stopwatch.appendChild(label);


// starts the timer on call
function startTimer(){
  if(start === false){
    timer = setInterval(() => {
      second++;
      if(second === 60) {
        second = 0;
        minutes++;
      }
      if(minutes === 60) {
        minutes = 0;
        hours++;
      }
      time.textContent = `${hours} : ${minutes} : ${second}`;
    }, 1000);
  start = true;
  }
}

// start button to start the timer on click
const startBtn = document.createElement('button');
startBtn.textContent = 'Start';
stopwatch.appendChild(startBtn);
startBtn.addEventListener('click', startTimer);

// stop button to stop the timer on click
const stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
stopwatch.appendChild(stopBtn);
stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  start = false;
})

// reset button to reset the timer to 0:0:0
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
stopwatch.appendChild(resetBtn);
resetBtn.addEventListener('click', () => {
  second = 0;
  minutes = 0;
  hours = 0;
  time.textContent = `${hours} : ${minutes} : ${second}`;
  clearInterval(timer);
  start = false;
})