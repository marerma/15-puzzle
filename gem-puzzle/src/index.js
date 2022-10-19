import 'normalize.css'
import '../styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo} from './drawPage.js'
import {newGameGrid, getStart} from './Gameclass.js'
import {moveTile} from './moveTile.js'
import {countdown} from './timer.js'

const defaultLevel = 4
let level = defaultLevel

function loadDefaultState (level) {
  drawStartPage()
  drawButtons()
  drawInfo()
  getStart(level)
  drawLevels()
 // moveTile(level)
}
loadDefaultState (level)



  const levelArea = document.querySelector('.level')
  const levels = Array.from(document.querySelectorAll('.level-btn'))
  level = levels.find(el => el.checked == true).id

  levelArea.addEventListener('input', (e) => {
    document.querySelector('.field').classList.add('opacity')
    const id = e.target.id
    levels.forEach(el => el.checked = false)
    e.target.checked = true
    level = id 
    changeCellsState(level)
    })


function changeCellsState(level) {
  newGameGrid.clearCells()
  newGameGrid.fillCells(level)
}

const startBtn = document.querySelectorAll('.controls-btn')[0]
const stopBtn = document.querySelectorAll('.controls-btn')[1]
const saveBtn = document.querySelectorAll('.controls-btn')[2]
const resultBtn = document.querySelectorAll('.controls-btn')[3]

startBtn.addEventListener('click', ()=> {
 changeCellsState(level)
 moveTile(level)
 document.querySelector('.field').classList.remove('opacity')
 countdown()
})