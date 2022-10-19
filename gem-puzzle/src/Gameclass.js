//import { Component, draw } from "./component";

/*const newGame = {
  canvas: document.createElement("canvas"),
  drawNewGame: function() {
    this.canvas.className = 'canvas'
    this.canvas.width = 400;
    this.canvas.height = 400;
    document.body.append(this.canvas)
    this.context = this.canvas.getContext("2d");
    const x = (document.body.offsetWidth - this.canvas.width) / 2;
    this.canvas.style.left = x + 'px'
  }
}*/
import {numbers, sortNumbers} from './numbers.js'

const newGameGrid = {
  field: document.createElement("div"),
  sortedNumbers: sortNumbers(numbers),
  drawNewGame: function(level) {
    this.field.className = 'field'
    this.field.width = 400;
    this.field.height = 400;
    document.body.append(this.field)
    this.field.style.gridTemplateColumns = `repeat(${level}, 1fr)`
    this.field.style.gridTemplateRows = `repeat(${level}, 1fr)`
  
    for(let i = 0; i < level*level; i++) {
      const textBlock = document.createElement('div')
      textBlock.className = 'number-cell'
      if (this.sortedNumbers[i] === 0) {
        textBlock.textContent = ''
        textBlock.setAttribute('id', 'empty')
      } else {textBlock.textContent = `${this.sortedNumbers[i]}`}
      
      this.field.append(textBlock)
      textBlock.setAttribute('order', `${i}`) 
   }
   const allTiles = Array.from(document.querySelectorAll('.number-cell'))
   const allTilesMatrix = getMatrix(allTiles, level)

  function getMatrix(array, length) {
     const result = [];
    for (let i = 0; i < array.length; i += length) {
      result.push(array.slice(i, i + length));
    } 
    return result;
  }
  function setGridTemplate (array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        array[i][j].style.gridColumn = `${i+1}/${i+2}`
        array[i][j].style.gridRow = `${j+1}/${j+2}`
      }
    }
  }
  setGridTemplate (allTilesMatrix)
  }
}

function getStart() {
  let levelDefault = 4
  newGameGrid.drawNewGame(levelDefault)
}

  
export {newGameGrid, getStart}

