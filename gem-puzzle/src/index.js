import 'normalize.css'
import './styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo, drawPopUp} from './drawPage.js'
import {newGameGrid, getStart, changeCellsState} from './Gameclass.js'
import {moveTile} from './moveTile.js'
import {countdown, t, clearTime} from './timer.js'
import { changeLevel } from './changeLevel.js'
import {setLocalStorage, getStateGame, loadPopUp, loadSavedGame, loadPopUpResult} from './localStorage.js'
import favicon from './assets/favicon.png'
import soundBlack from './assets/icon-sound-black.png'
import soundMute from './assets/icon-sound-mute2.png'
import changaFont from './assets/Changa-VariableFont_wght.ttf'
import changaBold from './assets/Changa-Bold.ttf'


const defaultLevel = 4
let level
let isPlay = true
let isMuted = false
let isActive = false
let minutesDefault = 0
let secondsDefault = 0


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

 let counter = 0

window.onload = loadDefaultState(defaultLevel)

window.addEventListener('load', ()=> {
 
  if(localStorage.getItem('gameState')) {
  loadPopUp()
  const popUpLoad = document.querySelector('.load')

  popUpLoad.addEventListener('click', (e)=> {
    if(e.target.id === "yes") {
      popUpLoad.classList.remove('open-popup')
      loadSavedGame ()
      counter = getStateGame().moves
      moveTile(counter)   
    } else {
      popUpLoad.classList.remove('open-popup')
      localStorage.removeItem('gameState')  
      moveTile(counter)
    }
  })
} else {
moveTile(counter)
}  
})

const levels = Array.from(document.querySelectorAll('.level-btn'))


levels.forEach(el => el.addEventListener('input', (e)=> {
  //document.querySelector('.field').classList.add('opacity')
  level = e.target.id 
  el.checked = false
  e.target.checked = true
  changeCellsState(level)
}))


// levelArea.addEventListener('input', (e) => {
//     document.querySelector('.field').classList.add('opacity')
//     const id = e.target.id
//     levels.forEach(el => el.checked = false)
//     e.target.checked = true
//     level = id 
//     changeCellsState(level)
//     })


// function changeCellsState(level, sortedNumbers = sortArraySolvable(numbers(level), level).flat(Infinity)) {
//  // let sortedNumbers = sortArraySolvable(numbers(level), level).flat(Infinity)

//   newGameGrid.clearCells()
//   newGameGrid.fillCells(sortedNumbers, level)
// }

const shuffleBtn = document.querySelectorAll('.controls-btn')[0]
//const stopBtn = document.querySelectorAll('.controls-btn')[1]
const saveBtn = document.querySelectorAll('.controls-btn')[1]
const resultBtn = document.querySelectorAll('.controls-btn')[2]
const muteBtn = document.querySelector('.icon')




shuffleBtn.addEventListener('click', () => {
    document.querySelector('.field').classList.remove('opacity')
    clearTimeout(t)
    clearTime()
    //document.querySelector('.counter').innerHTML = `Move: 0`
    level = changeLevel()
    changeCellsState(level)
    counter = 0
    //moveTile()
    countdown()  
    //document.querySelector('.counter').innerHTML = `Move: 0`
  
 
})
/*
stopBtn.addEventListener('click', () => {
  if(isActive) {
    document.querySelector('.field').classList.add('opacity')
    clearTimeout(t)
    clearTime()
    startBtn.innerHTML = "START"
    isActive = false
  }
 })*/

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
})


resultBtn.addEventListener('click', () => {
  loadPopUpResult()

})


export {isPlay, isMuted, isActive, minutesDefault, secondsDefault}
