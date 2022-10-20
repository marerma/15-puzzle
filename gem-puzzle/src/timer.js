let minutes = 0
let seconds = 0
let t

const countdown = ()=> { 
  const timer = document.querySelector('.timer')
  timer.innerHTML = "Time: " + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)
  seconds++

  if (seconds > 59) {
    minutes++
    seconds = 0
  }

 timerID()

}

function timerID() {
  t = setTimeout(countdown, 1000);
}

function clearTime() {
  const timer = document.querySelector('.timer')
  timer.innerHTML = "Time: 00:00" 
  minutes = 0
  seconds = 0
}

export {countdown, timerID, t, clearTime}