import { Component } from "./component";
import {newGame, getStart} from './Gameclass.js'

const gameBackground  = document.createElement('div');
const gameControllersField= document.createElement('div')

const timer = '00:00'

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
  const buttonsNames = ['start', 'save', 'results']
  for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button') 
    btn.className = 'controls-btn'
    btn.textContent = buttonsNames[i].toLocaleUpperCase()
    buttonsContainer.append(btn)
  }
  const icon = document.createElement('div')
  const img =  document.createElement('img')
  img.src = '../assets/icon-sound-black.png'
  icon.append(img)
  icon.className = 'icon'
  buttonsContainer.append(icon)

}

function drawInfo () {
  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'
  gameControllersField.append(infoContainer)
  const infoLine = document.createElement('span')
  const infoTime = document.createElement('span')
  infoContainer.append(infoLine)
  infoContainer.append(infoTime)
  infoLine.textContent = `Move: 0`
  infoTime.textContent = `Time: ${timer}`
  infoTime.className = 'timer'
  infoLine.className = 'counter'
}

function drawLevels (level) {
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
  
const defaultLevelItem = document.getElementById(level)
defaultLevelItem.checked = true
}


function drawPopUp () {
  const popup = document.createElement('div')
      popup.className = 'popup'
      const text = document.createElement('p')
      const close = document.createElement('span')
      close.textContent = 'X'
      close.className = 'close-icon'
      text.textContent = `Hooray! You solved the puzzle in 00-00 and N moves!`
      document.body.append(popup)
      popup.append(close)
      popup.append(text)
}

export {drawStartPage, drawButtons, drawInfo, drawLevels, drawPopUp}