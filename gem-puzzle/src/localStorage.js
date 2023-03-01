
import { checkWin, getPopup} from './checkwin.js'
import { changeLevel } from './changeLevel.js';
import {changeCellsState} from './Gameclass.js'
import { countdown, getTime} from './timer.js';
import {isPlay} from './index.js'
import soundBlack from './assets/icon-sound-black.png'
import soundMute from './assets/icon-sound-mute2.png'
import {playSong, pauseSong} from './audio'

function setLocalStorage() {
  const resultObj = {
    time: getTime(),
    moves: parseInt((document.querySelector('.counter').textContent).replace('Move: ', ''),10),
    array: checkWin(),
    level: parseInt(changeLevel(),10),
    sound: isPlay
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
  const popUpResult = document.querySelector('.result')


  if(localStorage.getItem('bestResults')) {
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
  } else {
    popUpResult.classList.add('open-popup')
    popUpResult.innerHTML = 
        `<span class="close-icon">X</span>
        <p class='record-title'>Table of records </p>
        <p>You have not solved the puzzle yet and don't have any records. Try a new game!</p>`
  }
  const icon = document.querySelector('.result').querySelector('.close-icon')
  icon.addEventListener('click', ()=> {
    popUpResult.classList.remove('open-popup')
  })
 }


function loadPopUp () {
 if(localStorage.getItem('gameState')) {
  const popUpLoad = document.querySelector('.load')
 popUpLoad.innerHTML = `
 <p>Do you want to continue a saved game?  </p>
 <p class="small">('NO' will delete the last saved game)</p>
 <div class='btn-yes-no'><div class="btn-pop" id ='yes'>Yes</div>
 <div class="btn-pop" id='no'>No</div></div>`
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
  let sound = savedGameState.sound
  changeCellsState(level, savedNumbers.flat(Infinity))
  document.querySelector('.timer').textContent = "Time: " + (saveMin > 9 ? saveMin : "0" + saveMin) + ":" + (saveSec > 9 ? saveSec : "0" + saveSec)
  document.querySelector('.counter').innerHTML = `Move: ${counter}`
  document.querySelector('.icon img').src = sound? soundBlack : soundMute
}

export {getResults, setLocalStorage, getStateGame, loadPopUp, loadSavedGame, loadPopUpResult}