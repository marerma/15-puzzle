import {newGameGrid, getStart} from './Gameclass.js'
import {changeLevel} from './changeLevel'
import {level} from './index.js'


function moveTile (level) {
  let a = parseInt(level, 10)
  
  const gameField = document.querySelector('.field')
  const emptyField = document.getElementById('empty')
 
   
  
    gameField.addEventListener('click', (e) => {
    
    let targetField = e.target
    let gridTarget = targetField.style.gridArea
    let gridEmpty = emptyField.style.gridArea
    let targetFieldOrder = parseInt(targetField.getAttribute('order'),10)
    let emptyOrder = parseInt(emptyField.getAttribute('order'), 10)  
    let tileOrder = targetFieldOrder

    const changeTilePosition = (order) => {
      emptyField.setAttribute('order', targetFieldOrder)
      targetField.setAttribute('order', order)
      targetField.style.gridArea = gridEmpty
      emptyField.style.gridArea = gridTarget 
    }
    
  
    if ((parseInt(emptyOrder,10) - parseInt(targetFieldOrder,10)) === 1) {
      tileOrder = targetFieldOrder + 1
      changeTilePosition(tileOrder)
    }

    if ((parseInt(emptyOrder, 10) - parseInt(targetFieldOrder, 10)) === -1) {
      tileOrder = Number(targetFieldOrder) - 1
      changeTilePosition(tileOrder)
    } 

    if ((parseInt(emptyOrder, 10) - parseInt(targetFieldOrder, 10)) === a) {
      tileOrder = Number(targetFieldOrder) + a
      changeTilePosition(tileOrder)
     }

     if ((parseInt(emptyOrder, 10) - parseInt(targetFieldOrder, 10)) === -a) {
      tileOrder = Number(targetFieldOrder) - a
      changeTilePosition(tileOrder)
    }
     else {return}
})
}
 
export {moveTile}