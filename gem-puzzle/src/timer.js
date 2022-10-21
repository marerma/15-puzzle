import {toLoad, getStateGame} from './localStorage.js'



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

function getTime () {
  const timer = document.querySelector('.timer')
  let timeStr = (timer.textContent).replace('Time: ','')
  const timeStamp = {
    minutes: Number(timeStr.split(':')[0]),
    seconds: Number(timeStr.split(':')[1])
  }
  return timeStamp
}



export {countdown, timerID, t, clearTime, getTime}





// const setTimer = {
//   minutes: 0,
//   seconds: 0,
//   countdown: function (minutes, seconds) { 
//     minutes = 0
//     seconds = 0
//     const timer = document.querySelector('.timer')
//     timer.innerHTML = "Time: " + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)
//     seconds++

// console.log(seconds)
//     if (seconds > 59) {
//       minutes++
//       seconds = 0
//     }
//    timerID()
//   },  

//   clearTime: function () {
//     const timer = document.querySelector('.timer')
//     timer.innerHTML = "Time: 00:00" 
//     this.minutes = 0
//     this.seconds = 0
//   }
// }