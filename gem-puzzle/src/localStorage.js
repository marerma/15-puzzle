import { moveTile } from './moveTile.js'
import { checkWin, getPopup} from './checkwin.js'
import {drawLevels, drawPopUp} from './drawPage.js'
import { changeLevel } from './changeLevel.js';
import {changeCellsState} from './Gameclass.js'
import { countdown, getTime} from './timer.js';


function setLocalStorage() {
  const resultObj = {
    time: getTime(),//document.querySelector('.timer').textContent,
    moves: parseInt((document.querySelector('.counter').textContent).replace('Move: ', ''),10),
    array: checkWin(),
    level: parseInt(changeLevel(),10)
  }
  
  localStorage.setItem('gameState', JSON.stringify(resultObj));
}


function getStateGame() {
  return JSON.parse(localStorage.getItem('gameState')); 
}

function getResults() {
  let bestResults = JSON.parse(localStorage.getItem('bestResults'))
  return bestResults[bestResults.length -1]; 
}

function loadPopUpResult () {
  if(localStorage.getItem('bestResults')) {
  const popUpResult = document.querySelector('.result')
  let bestResults = JSON.parse(localStorage.getItem('bestResults'))
  bestResults.sort((a,b)=> a.moves - b.moves) //сортировка по кол-ву движений
  let textFull =''
  for (let i = 0; i < bestResults.length; i++) {
    let textItem = `<li class="result-item">Time: ${bestResults[i].time} Moves: ${bestResults[i].moves}</li>`
    textFull += textItem
  }
  popUpResult.innerHTML = ''
  popUpResult.innerHTML = `<span class="close-icon">X</span><p class='record-title'>Table of records </p><ol class="result-list">${textFull}</ol>`
  popUpResult.classList.add('open-popup')
  const icon = document.querySelectorAll('.close-icon')[2]
  icon.addEventListener('click', ()=> {
    popUpResult.classList.remove('open-popup')
  })
  }
 }


function loadPopUp () {
 if(localStorage.getItem('gameState')) {
  drawPopUp('load')
  const popUpLoad = document.querySelector('.load')
 popUpLoad.innerHTML = `
 <p>Do you want to continue saved game?</p>
 <div class="btn-pop" id ='yes'>Yes</div>
 <div class="btn-pop" id='no'>No</div>`
  popUpLoad.classList.add('open-popup')
 }
}


function loadSavedGame () {
  const savedGameState = getStateGame()
  let savedNumbers = savedGameState.array
  let level = savedGameState.level
  let counter = savedGameState.moves
  let saveMin = savedGameState.time.minutes
  let saveSec = savedGameState.time.seconds
  changeCellsState(level, savedNumbers.flat(Infinity))
  document.querySelector('.timer').textContent = "Time: " + (saveMin > 9 ? saveMin : "0" + saveMin) + ":" + (saveSec > 9 ? saveSec : "0" + saveSec)
  document.querySelector('.counter').innerHTML = `Move: ${counter}`
 
}

export {getResults, setLocalStorage, getStateGame, loadPopUp, loadSavedGame, loadPopUpResult}