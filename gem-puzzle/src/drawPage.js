import soundBlack from './assets/icon-sound-black.png'


function drawStartPage() {

  const gameBackground  = document.createElement('div');
  const gameControllersField= document.createElement('div')
  gameBackground.className = 'playing-bg';
  document.body.append(gameBackground); 
  gameControllersField.className = 'gameControllersField';
  gameBackground.append(gameControllersField);
  return gameBackground
}

function drawButtons () {
  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'btn-container'
  document.body.append(buttonsContainer)
  const buttonsNames = ['start', 'save', 'results']
  for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button') 
    btn.className = 'controls-btn'
    btn.textContent = buttonsNames[i].toLocaleUpperCase()
    buttonsContainer.append(btn)
  }

}

function drawInfo () {
  let timer = "00:00" 
  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'
  document.body.append(infoContainer)
  const infoLine = document.createElement('span')
  const infoTime = document.createElement('span')
  infoContainer.append(infoLine)
  infoContainer.append(infoTime)
  infoLine.textContent = `Move: 0`
  infoTime.textContent = `Time: ${timer}`
  infoTime.className = 'timer'
  infoLine.className = 'counter'
  const icon = document.createElement('div')
  const img =  document.createElement('img')
  img.src = soundBlack
  icon.append(img)
  icon.className = 'icon'
  infoContainer.append(icon)

}

function drawLevels (level) {
  const layoutLevel = document.createElement("div")
  const blockLevel = document.createElement("div")
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
    blockLevel.append(levelBtn, labelLevel)
    layoutLevel.append(blockLevel)
  }
  document.body.append(layoutLevel)
  
const defaultLevelItem = document.getElementById(level)
defaultLevelItem.checked = true
}


function drawPopUp (className) {
  const popup = document.createElement('div')
      popup.className = `popup ${className}`
      const text = document.createElement('p')
      const close = document.createElement('span')
      close.textContent = 'X'
      close.className = 'close-icon'
      document.body.append(popup)
      popup.append(close)
      popup.append(text)
}

function drawGreeting () {
  const popup = document.createElement('div')
  popup.className = 'greeting'
  const text = document.createElement('p')
  document.body.append(popup)
  popup.append(text) 
  text.textContent = 'Push Start-button to start a new game'
}

export {drawStartPage, drawButtons, drawInfo, drawLevels, drawPopUp, drawGreeting}