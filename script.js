const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;

// Function to update timer display
function updateDisplay(time) {
  const hours = Math.floor(time / 3600000); // convert milliseconds to hours
  const minutes = Math.floor((time % 3600000) / 60000); // remaining milliseconds to minutes
  const seconds = Math.floor((time % 60000) / 1000); // remaining milliseconds to seconds
  const milliseconds = Math.floor(time % 1000); // remaining milliseconds

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  timerDisplay.textContent = formattedTime;
}

// Start timer function
function startTimer() {
  startTime = Date.now() - elapsedTime; // get current time and subtract elapsed time
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime; // update elapsed time
    updateDisplay(elapsedTime);
  }, 10); // update every 10 milliseconds
  startBtn.disabled = true; // disable start button
  stopBtn.disabled = false; // enable stop button
}

// Stop timer function
function stopTimer() {
  clearInterval(intervalId); // clear interval to stop timer
  startBtn.disabled = false; // enable start button
  stopBtn.disabled = true; // disable stop button
}

// Reset timer function
function resetTimer() {
  clearInterval(intervalId); // clear interval
  startTime = 0;
  elapsedTime = 0;
  updateDisplay(elapsedTime); // update display to 00:00:00
  stopBtn.disabled = true; // disable stop button (since timer is reset)
  startBtn.disabled = false; // enable start button
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
