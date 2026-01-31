let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

function updateDisplay(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    document.getElementById("display").textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(2, "0")}`;
}

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 10);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    lapCount = 0;
    updateDisplay(0);
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timerInterval) {
        lapCount++;
        const lapTime = document.createElement("li");
        lapTime.textContent = `Lap ${lapCount} - ${document.getElementById("display").textContent}`;
        document.getElementById("laps").appendChild(lapTime);
    }
}
