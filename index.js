const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTime() {
  let minute = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formatedTime = `${minute.toString().padStart(2, "0")}  ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formatedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTime();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's UP");
      timeLeft = 1500;
      updateTime();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTime();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
