import { counter } from './moveTile.js'
import { checkWin } from './checkwin.js'


function setLocalStorage() {
  const resultObj = {
    time: document.querySelector('.timer').textContent,
    moves: counter,
    array: checkWin()
  }
  
  localStorage.setItem('gameState', JSON.stringify(resultObj));
}


function getLocalStorage() {
  const stateGame = JSON.parse(localStorage.getItem('gameState'));
}


export {setLocalStorage, getLocalStorage}