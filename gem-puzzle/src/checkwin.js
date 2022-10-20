import { counter } from './moveTile.js'
import {t} from './timer.js'

function checkWin () {
  let arrayPlay = Array.from(document.querySelectorAll('.number-cell'))
  let arrayToCheck = []
  arrayPlay.sort((a, b) => {return a.getAttribute('order') - b.getAttribute('order')})

    arrayPlay.forEach(el => {
    if(el.textContent === '') {
      arrayToCheck.push(0)
    } else arrayToCheck.push(parseInt(el.textContent, 10))
    } )
 
   return arrayToCheck
}

function getPopup(arrayToCheck, arrayWin) {
  const popup = document.querySelector('.popup')
  const arrayWinReverse = arrayWin.slice(1).concat(arrayWin.slice(0,1))
  const isSame = (arrayToCheck.length == arrayWinReverse.length) && arrayToCheck.every(function(element, index) {
    return element === arrayWinReverse[index]}); 

  if(isSame) {
  popup.classList.add('open-popup')
 
  const time = document.querySelector('.timer').textContent
  popup.textContent = `Hooray! You solved the puzzle in ${time} and ${counter} moves!`
  clearTimeout(t)
  }
}



export {checkWin, getPopup}