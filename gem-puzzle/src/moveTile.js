import {newGameGrid, getStart} from './Gameclass.js'



function moveTile () {
  const gameField = document.querySelector('.field')
  const emptyField = document.getElementById('empty')

  let itemWidth = getComputedStyle(emptyField).width
  let gap = getComputedStyle(gameField).gap
  let difference = parseInt(itemWidth.replace('px', ''), 10) + parseInt(gap.replace('px', ''), 10) + 2 
  
  gameField.addEventListener('click', (e) => {
    let targetField = e.target
    let gridTarget = targetField.style.gridArea
    let gridEmpty = emptyField.style.gridArea
  

    let targetFieldOrder = targetField.getAttribute('order')
    let emptyOrder = emptyField.getAttribute('order')
    
    const changeTilePosition = (tileOrder) => {
      emptyField.setAttribute('order', targetFieldOrder)
      targetField.setAttribute('order', tileOrder)
      targetField.style.gridArea = gridEmpty
      emptyField.style.gridArea = gridTarget
    }
    let tileOrder
    if ((emptyOrder - targetFieldOrder) === 1) {
     tileOrder = Number(targetFieldOrder) + 1
     changeTilePosition(tileOrder)
   
    }
    if ((emptyOrder - targetFieldOrder) === -1) {
      tileOrder = Number(targetFieldOrder) - 1
      changeTilePosition(tileOrder)
    
    } 
    if ((emptyOrder - targetFieldOrder) === 4) {
      tileOrder = Number(targetFieldOrder) + 4
      changeTilePosition(tileOrder)
 
     }
     if ((emptyOrder - targetFieldOrder) === -4) {
      tileOrder = Number(targetFieldOrder) - 4
      changeTilePosition(tileOrder)
      
     } 
     else {return}
})
}
 
export {moveTile}