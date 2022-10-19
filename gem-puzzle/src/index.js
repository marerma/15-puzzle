import 'normalize.css'
import '../styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo} from './drawPage.js'
import {newGameGrid, getStart} from './Gameclass.js'
//import { Component } from "./component";
import {moveTile} from './moveTile'



drawStartPage()
drawButtons()
drawInfo()
getStart()
drawLevels()


const defaultLevelItem = document.getElementById('4')
defaultLevelItem.checked = true

moveTile()
