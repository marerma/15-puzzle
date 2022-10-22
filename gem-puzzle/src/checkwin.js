import {t} from './index.js'
import {getResults} from './localStorage.js'

const savedResults = []

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
  const popup = document.querySelector('.win')
  const arrayWinReverse = arrayWin.slice(1).concat(arrayWin.slice(0,1))
  const isSame = (arrayToCheck.length == arrayWinReverse.length) && arrayToCheck.every(function(element, index) {
    return element === arrayWinReverse[index]}); 

  if(isSame) {
   saveResults()
   popup.classList.add('open-popup')
   const time = document.querySelector('.timer').textContent
   popup.innerHTML = `<span class="close-icon">X</span>
<p>Hooray! You solved the puzzle in ${getResults().time} and ${getResults().moves} moves!</p>`
   clearTimeout(t)
   const icon = document.querySelectorAll('.close-icon')[0]
   icon.addEventListener('click', ()=> {
    popup.classList.remove('open-popup')
   })
}}

function saveResults() {

  const resultObj = {
    time: (document.querySelector('.timer').textContent).replace('Time: ',''),
    moves: parseInt((document.querySelector('.counter').textContent).replace('Move: ', ''),10),
  }

  savedResults.push(resultObj)
  localStorage.setItem('bestResults', JSON.stringify(savedResults));
}




export {checkWin, getPopup}