let minutes = 0
let seconds = 0
const countdown = ()=> { 
  const timer = document.querySelector('.timer')
  let time = `0${minutes}: ${seconds}`
  timer.innerHTML = time
  seconds++


  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  if (seconds > 59) {
    minutes++
    seconds = 0
  }

  setTimeout(()=> {
    countdown()
  },1000)
  }

  export {countdown}