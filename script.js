let startTime = 0;
let elapsed = 0;
let timer = null;
let lapCount = 0;

function updateDisplay(time) {
    let ms = Math.floor((time % 1000) / 10);
    let sec = Math.floor((time / 1000) % 60);
    let min = Math.floor((time / (1000 * 60)) % 60);

    document.getElementById("display").textContent =
        `${String(min).padStart(2, "0")}:` +
        `${String(sec).padStart(2, "0")}:` +
        `${String(ms).padStart(2, "0")}`;
}

function toggleStartPause() {
    const btn = document.querySelector(".toggle");

    if (!timer) {
        // START
        startTime = Date.now() - elapsed;
        timer = setInterval(() => {
            elapsed = Date.now() - startTime;
            updateDisplay(elapsed);
        }, 10);

        btn.textContent = "Pause";
        btn.style.background = "#ff9800";
    } else {
        // PAUSE
        clearInterval(timer);
        timer = null;

        btn.textContent = "Start";
        btn.style.background = "#4caf50";
    }
}

function reset() {
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    lapCount = 0;
    updateDisplay(0);
    document.getElementById("laps").innerHTML = "";

    const btn = document.querySelector(".toggle");
    btn.textContent = "Start";
    btn.style.background = "#4caf50";
}

function lap() {
    if (!timer) return;

    lapCount++;
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount} — ${document.getElementById("display").textContent}`;

    // Latest lap on top
    document.getElementById("laps").prepend(li);
}

