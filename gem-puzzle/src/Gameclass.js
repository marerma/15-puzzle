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
  }
}

function getStart() {
  newGameGrid.drawNewGame(4)
  console.log(newGameGrid.sortedNumbers)
}


  
  
export {newGameGrid, getStart}

