
// import {playSong} from './audio.js'
// import {isPlay} from './index.js'
// import {checkWin, getPopup} from './checkwin.js'
// import { numbers } from './numbers.js'
// import { changeLevel } from './changeLevel.js'


// // function moveTile (counter) {
// //   const gameField = document.querySelector('.field')

// // function changePosition (e) {
// //   const movesCounter = document.querySelector('.counter')
// //   let a = parseInt(changeLevel(), 10)
// //   const emptyField = document.getElementById('empty')
// //   const targetField = e.target
// //   let gridTarget = targetField.style.gridArea
// //   let gridEmpty = emptyField.style.gridArea
// //   let targetFieldOrder = parseInt(targetField.getAttribute('order'),10)
// //   let emptyOrder = parseInt(emptyField.getAttribute('order'), 10)  
// //   let tileOrder = targetFieldOrder
// //   let arrayToCheck

// // const changeTilePosition = (order) => {
// //   emptyField.setAttribute('order', targetFieldOrder)
// //   targetField.setAttribute('order', order)
// //   targetField.style.gridArea = gridEmpty
// //   emptyField.style.gridArea = gridTarget 
// //   movesCounter.innerHTML = `Move: ${counter}`
// //   if(isPlay) {playSong()}
// //     }
  
// //   if ((emptyOrder - targetFieldOrder) === 1 && targetFieldOrder % a != 0) {
// //     tileOrder = targetFieldOrder + 1
// //     counter ++
  
// //     changeTilePosition(tileOrder)
// //       arrayToCheck = checkWin()
// //     getPopup(arrayToCheck, numbers(a))
    
    
// //   } else if ((emptyOrder - targetFieldOrder) === -1 && emptyOrder % a != 0) {
// //       tileOrder = Number(targetFieldOrder) - 1
// //       counter ++
    
// //     changeTilePosition(tileOrder)
// //     arrayToCheck = checkWin()
// //       getPopup(arrayToCheck, numbers(a))

// //     } else if ((emptyOrder - targetFieldOrder) === a) {
// //     tileOrder = Number(targetFieldOrder) + a
// //     counter ++
  
// //     changeTilePosition(tileOrder)
// //     arrayToCheck = checkWin()
// //     getPopup(arrayToCheck, numbers(a))
  
// //     } else if ((emptyOrder - targetFieldOrder) === -a) {
    
// //     tileOrder = Number(targetFieldOrder) - a
// //     counter ++
  
// //     changeTilePosition(tileOrder)
// //     arrayToCheck = checkWin()
// //     getPopup(arrayToCheck, numbers(a))
// //   }

// // }

// // gameField.addEventListener('click', (e) => {
// //   changePosition(e)
// //     // const emptyField = document.getElementById('empty')
// //     // let targetField = e.target
// //     // let gridTarget = targetField.style.gridArea
// //     // let gridEmpty = emptyField.style.gridArea
// //     // let targetFieldOrder = parseInt(targetField.getAttribute('order'),10)
// //     // let emptyOrder = parseInt(emptyField.getAttribute('order'), 10)  
// //     // let tileOrder = targetFieldOrder
// //     // let arrayToCheck

// //     // const changeTilePosition = (order) => {
// //     //   emptyField.setAttribute('order', targetFieldOrder)
// //     //   targetField.setAttribute('order', order)
// //     //   targetField.style.gridArea = gridEmpty
// //     //   emptyField.style.gridArea = gridTarget 
// //     //   movesCounter.innerHTML = `Move: ${counter}`
// //     //   if(isPlay) {playSong()}
// //     // }
  
// //     // if ((emptyOrder - targetFieldOrder) === 1 && targetFieldOrder % a != 0) {
// //     //   tileOrder = targetFieldOrder + 1
// //     //   counter ++
    
// //     //   changeTilePosition(tileOrder)
// //     //    arrayToCheck = checkWin()
// //     //    getPopup(arrayToCheck, numbers(level))
     
      
// //     // } else if ((emptyOrder - targetFieldOrder) === -1 && emptyOrder % a != 0) {
// //     //     tileOrder = Number(targetFieldOrder) - 1
// //     //     counter ++
      
// //     //   changeTilePosition(tileOrder)
// //     //   arrayToCheck = checkWin()
// //     //    getPopup(arrayToCheck, numbers(level))

// //     //   } else if ((emptyOrder - targetFieldOrder) === a) {
// //     //   tileOrder = Number(targetFieldOrder) + a
// //     //   counter ++
    
// //     //   changeTilePosition(tileOrder)
// //     //   arrayToCheck = checkWin()
// //     //   getPopup(arrayToCheck, numbers(level))
    
// //     //  } else if ((emptyOrder - targetFieldOrder) === -a) {
     
// //     //   tileOrder = Number(targetFieldOrder) - a
// //     //   counter ++
    
// //     //   changeTilePosition(tileOrder)
// //     //   arrayToCheck = checkWin()
// //     //   getPopup(arrayToCheck, numbers(level))
// //     // }

// // })

// // }
 

// function changePosition (e) {
//   const movesCounterField = document.querySelector('.counter')
//   let a = parseInt(changeLevel(), 10)
//   const emptyField = document.getElementById('empty')
//   const targetField = e.target
//   let gridTarget = targetField.style.gridArea
//   let gridEmpty = emptyField.style.gridArea
//   let targetFieldOrder = parseInt(targetField.getAttribute('order'),10)
//   let emptyOrder = parseInt(emptyField.getAttribute('order'), 10)  
//   let tileOrder = targetFieldOrder
//   let arrayToCheck

// const changeTilePosition = (order) => {
//   emptyField.setAttribute('order', targetFieldOrder)
//   targetField.setAttribute('order', order)
//   targetField.style.gridArea = gridEmpty
//   emptyField.style.gridArea = gridTarget 
//   movesCounterField.innerHTML = `Move: ${movesCounter}`
//   if(isPlay) {playSong()}
//   }
  
//   if ((emptyOrder - targetFieldOrder) === 1 && targetFieldOrder % a != 0) {
//     tileOrder = targetFieldOrder + 1
//     movesCounter ++
  
//     changeTilePosition(tileOrder)
//      arrayToCheck = checkWin()
//     getPopup(arrayToCheck, numbers(a))
//     return movesCounter
    
//   } else if ((emptyOrder - targetFieldOrder) === -1 && emptyOrder % a != 0) {
//       tileOrder = Number(targetFieldOrder) - 1
//       movesCounter ++
//       changeTilePosition(tileOrder)
//       arrayToCheck = checkWin()
//       getPopup(arrayToCheck, numbers(a))
//       return movesCounter
//     } else if ((emptyOrder - targetFieldOrder) === a) {
//       tileOrder = Number(targetFieldOrder) + a
//       movesCounter ++
//       changeTilePosition(tileOrder)
//       arrayToCheck = checkWin()
//       getPopup(arrayToCheck, numbers(a))
//       return movesCounter
//     } else if ((emptyOrder - targetFieldOrder) === -a) {
    
//       tileOrder = Number(targetFieldOrder) - a
//       movesCounter ++
    
//       changeTilePosition(tileOrder)
//       arrayToCheck = checkWin()
//       getPopup(arrayToCheck, numbers(a))
//       return movesCounter
//   }
//   console.log(movesCounter)
//   return movesCounter

// }

// // gameField.addEventListener('click', (e) => {
// //   changePosition(e)

// // })





// export {/*moveTile,*/ changePosition}