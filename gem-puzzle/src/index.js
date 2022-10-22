import 'normalize.css'
import './styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo, drawPopUp, drawGreeting} from './drawPage.js'
import {newGameGrid, getStart, changeCellsState} from './Gameclass.js'
import { changeLevel } from './changeLevel.js'
import {setLocalStorage, getStateGame, loadPopUp, loadSavedGame, loadPopUpResult} from './localStorage.js'
import soundBlack from './assets/icon-sound-black.png'
import soundMute from './assets/icon-sound-mute2.png'
import {pauseSong, playSong} from './audio'
import {checkWin, getPopup} from './checkwin.js'
import { numbers } from './numbers.js'
import { score } from './score.js'


const defaultLevel = 4
let level
let isPlay = true
let isMuted = false
let isActive = false
let minutes = 0
let seconds = 0
let movesCounter = 0
let t


function loadDefaultState (level) {
  drawStartPage()
  drawButtons()
  drawInfo()
  getStart(level)
  drawLevels(level)
  drawPopUp('win')
  drawPopUp('load')
  drawPopUp('result')

}


window.onload = loadDefaultState(defaultLevel)

window.addEventListener('load', ()=> {
 
  if(localStorage.getItem('gameState')) {
    loadPopUp()
    const popUpLoad = document.querySelector('.load')

  popUpLoad.addEventListener('click', (e)=> {
    if(e.target.id === "yes") {
      popUpLoad.classList.remove('open-popup')
      loadSavedGame ()
      getStateGame().sound? isPlay = true : isPlay = false
      movesCounter = getStateGame().moves
      minutes = getStateGame().time.minutes
      seconds = getStateGame().time.seconds
      countdown()
      gameField.addEventListener('click', changePosition) 
    } else {
      popUpLoad.classList.remove('open-popup')
      localStorage.removeItem('gameState') 
      document.querySelector('.greeting').style.display ='block'
    }
  })
}
  drawGreeting()

})

const levels = Array.from(document.querySelectorAll('.level-btn'))


levels.forEach(el => el.addEventListener('input', (e)=> {
  level = e.target.id 
  el.checked = false
  e.target.checked = true
  changeCellsState(level)
  clearTimeout(t)
  clearTime()
  movesCounter = 0
  document.querySelector('.counter').innerHTML = `Move: ${movesCounter}`
  document.querySelector('.greeting').style.display ='block'  
  gameField.removeEventListener('click', changePosition) 
}))



const shuffleBtn = document.querySelectorAll('.controls-btn')[0]
const saveBtn = document.querySelectorAll('.controls-btn')[1]
const resultBtn = document.querySelectorAll('.controls-btn')[2]
const muteBtn = document.querySelector('.icon')
const gameField = document.querySelector('.field')



shuffleBtn.addEventListener('click', () => {
  movesCounter = 0
  
  if(document.querySelector('.greeting')) {
    document.querySelector('.greeting').style.display ='none'
  }

  if(document.querySelector('.save')) {
    (document.querySelector('.save')).remove()
  } 
  
  document.querySelector('.counter').innerHTML = `Move: ${movesCounter}`
  clearTimeout(t)
  clearTime()
  level = changeLevel()
  changeCellsState(level)

  gameField.addEventListener('click', changePosition)
  countdown()  
})


 muteBtn.addEventListener('click', () => {
  if(isPlay) {
    isMuted = true
    isPlay = false
    document.querySelector('.icon img').src = soundMute

  } else {
    isMuted = false
    isPlay = true
    document.querySelector('.icon img').src = soundBlack
  } 
 } )


saveBtn.addEventListener('click', () => {
  setLocalStorage()
  clearTimeout(t)
  movesCounter = 0

  drawPopUp('save')
  if(document.querySelector('.save')) {
    (document.querySelector('.save').getElementsByTagName('p'))[0].textContent = 'You saved your game. If you reload, you can continue'
    document.querySelector('.save').classList.add('open-popup')
    const icon = document.querySelector('.save').querySelector('.close-icon')
      icon.addEventListener('click', ()=> {
        document.querySelector('.save').classList.remove('open-popup')
        clearTime()
        document.querySelector('.counter').innerHTML = `Move: ${movesCounter}`
        document.querySelector('.greeting').style.display ='block'        
  })
  }
  gameField.removeEventListener('click', changePosition)
})


resultBtn.addEventListener('click', () => {
  loadPopUpResult()

})

score()


function changePosition (e) {
  const movesCounterField = document.querySelector('.counter')
  let a = parseInt(changeLevel(), 10)
  const emptyField = document.getElementById('empty')
  const targetField = e.target
  let gridTarget = targetField.style.gridArea
  let gridEmpty = emptyField.style.gridArea
  let targetFieldOrder = parseInt(targetField.getAttribute('order'),10)
  let emptyOrder = parseInt(emptyField.getAttribute('order'), 10)  
  let tileOrder = targetFieldOrder
  let arrayToCheck

const changeTilePosition = (order) => {
  emptyField.setAttribute('order', targetFieldOrder)
  targetField.setAttribute('order', order)
  targetField.style.gridArea = gridEmpty
  emptyField.style.gridArea = gridTarget 
  movesCounterField.innerHTML = `Move: ${movesCounter}`
  if(isPlay) {playSong()}
  }
  
  if ((emptyOrder - targetFieldOrder) === 1 && targetFieldOrder % a != 0) {
    tileOrder = targetFieldOrder + 1
    movesCounter ++
  
    changeTilePosition(tileOrder)
     arrayToCheck = checkWin()
    getPopup(arrayToCheck, numbers(a))
   
    
  } else if ((emptyOrder - targetFieldOrder) === -1 && emptyOrder % a != 0) {
      tileOrder = Number(targetFieldOrder) - 1
      movesCounter ++
      changeTilePosition(tileOrder)
      arrayToCheck = checkWin()
      getPopup(arrayToCheck, numbers(a))
      
    } else if ((emptyOrder - targetFieldOrder) === a) {
      tileOrder = Number(targetFieldOrder) + a
      movesCounter ++
      changeTilePosition(tileOrder)
      arrayToCheck = checkWin()
      getPopup(arrayToCheck, numbers(a))
      
    } else if ((emptyOrder - targetFieldOrder) === -a) {
    
      tileOrder = Number(targetFieldOrder) - a
      movesCounter ++
    
      changeTilePosition(tileOrder)
      arrayToCheck = checkWin()
      getPopup(arrayToCheck, numbers(a))
      
  }
}



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


export {isPlay, isMuted, isActive, t}
