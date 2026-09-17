let pomodoro = document.getElementById("pomodoro-timer")
let short = document.getElementById("short-timer")
let long = document.getElementById("long-timer")
let timers = document.querySelectorAll("timer-display")
let session = document.getElementById("pomodoro-session")
let shortBreak = document.getElementById("short-break")
let longBreak = document.getElementById("long-break")
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let timerMsg = document.getElementById("timer-message")
let button = document.getElementById(".button")

let currentTimer = null
let myInterval = null

// show the default timer
function showDefaultTimer()  {
    pomodoro.style.display = "block"
    short.style.display = "none"
    long.style.display = "none"
}

showDefaultTimer()

function hideALL() {
    timers.forEach((timer) => {
        timer.style.display = "none"
    })
}

session.addEventListener("click", () => {
    hideALL()

    short.style.display = "block"

    session.classList.remove("active")
    shortBreak.classList.add("active")
    longBreak.classList.remove("active")
})


longBreak.addEventListener("click", () => {
    hideALL()

    long.style.display = "block"

    session.classList.remove("active")
    shortBreak.classList.remove("active")
    longBreak.classList.add("active")
})

// Start the timer on click
function startTimer(timerDisplay) {
    if(myInterval) {
        clearInterval(myInterval)
    }

    timerDuration = timerDisplay.getAttribute("data-duration").split(":")[0]

    let durationInMilliseconds = timerDuration * 60 * 1000
    let endTimestamp = Date.now
}




startBtn.addEventListener("click", () =>)