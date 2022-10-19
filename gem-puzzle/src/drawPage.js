import { Component } from "./component";
import {newGame, getStart} from './Gameclass.js'

const gameBackground  = document.createElement('div');
const gameControllersField= document.createElement('div')

const counterMove = 0
const timer = 0

function drawStartPage() {
  gameBackground.className = 'playing-bg';
  document.body.append(gameBackground); 
  gameControllersField.className = 'gameControllersField';
  gameBackground.append(gameControllersField);
  return gameBackground
}

function drawButtons () {
  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'btn-container'
  gameControllersField.append(buttonsContainer)
  const buttonsNames = ['start', 'stop', 'save', 'results']
  for (let i = 0; i < 4; i++) {
    let btn = document.createElement('button') 
    btn.className = 'controls-btn'
    btn.textContent = buttonsNames[i].toLocaleUpperCase()
    buttonsContainer.append(btn)
  }
}

function drawInfo () {
  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'
  gameControllersField.append(infoContainer)
  const infoLine = document.createElement('p')
  infoContainer.append(infoLine)
  infoLine.textContent = `Move: ${counterMove} Time: ${timer}`
}

function drawLevels () {
  const layoutLevel = document.createElement("div")
  for (let i = 3; i < 9; i++) {
    const labelLevel = document.createElement("label")
    const levelBtn = document.createElement("input")
    layoutLevel.className = 'level'
    levelBtn.className = 'level-btn'
    labelLevel.className = 'label'
    levelBtn.type = 'radio'
    levelBtn.name = 'level'
    levelBtn.id = `${i}`
    labelLevel.setAttribute('for', `${i}`)
    labelLevel.textContent = `${i}x${i}`
    layoutLevel.append(levelBtn, labelLevel)
  }
  document.body.append(layoutLevel)
}




export {drawStartPage, drawButtons, drawInfo, drawLevels}