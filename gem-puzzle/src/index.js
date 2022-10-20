import 'normalize.css'
import '../styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo, drawPopUp} from './drawPage.js'
import {newGameGrid, getStart} from './Gameclass.js'
import {moveTile} from './moveTile.js'
import {countdown, t, clearTime} from './timer.js'
import { changeLevel } from './changeLevel.js'
import {setLocalStorage, getLocalStorage} from './localStorage.js'



const defaultLevel = 4
let level
let isPlay = true
let isMuted = false
let counterMoves = 0

function loadDefaultState (level) {
  drawStartPage()
  drawButtons()
  drawInfo()
  getStart(level)
  drawLevels(level)
  drawPopUp()
}


window.onload = loadDefaultState(defaultLevel)

const levels = Array.from(document.querySelectorAll('.level-btn'))


levels.forEach(el => el.addEventListener('input', (e)=> {
  document.querySelector('.field').classList.add('opacity')
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


function changeCellsState(level) {
  newGameGrid.clearCells()
  newGameGrid.fillCells(level)
}

const startBtn = document.querySelectorAll('.controls-btn')[0]
//const stopBtn = document.querySelectorAll('.controls-btn')[1]
const saveBtn = document.querySelectorAll('.controls-btn')[1]
const resultBtn = document.querySelectorAll('.controls-btn')[2]
const muteBtn = document.querySelector('.icon')
let isActive = false


startBtn.addEventListener('click', () => {
  if(isActive) {
    document.querySelector('.field').classList.toggle('opacity')
    clearTimeout(t)
    clearTime()
    // clearTimeout(t)
    isActive = false
    startBtn.innerHTML = "START"
    document.querySelector('.counter').innerHTML = `Move: 0`
  } else {
    startBtn.innerHTML = "NEW GAME"
      level = changeLevel()
      changeCellsState(level)
      moveTile(level)
      document.querySelector('.field').classList.toggle('opacity')
      countdown()
      isActive = true
  }
 
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
    document.querySelector('.icon img').src = "../assets/icon-sound-mute2.png"

  } else {
    isMuted = false
    isPlay = true
    document.querySelector('.icon img').src = "../assets/icon-sound-black.png"
  } 
 } )



const closePopUp = document.querySelector('.close-icon')

closePopUp.addEventListener('click', ()=> {
  popup.classList.remove('open-popup')
})


saveBtn.addEventListener('click', () => {
  setLocalStorage()
})

 export {isPlay, isMuted, isActive, counterMoves}