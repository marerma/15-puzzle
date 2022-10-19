import 'normalize.css'
import '../styles/styles.sass'
import {drawStartPage, drawButtons, drawLevels, drawInfo} from './drawPage.js'
import {newGameGrid, getStart} from './Gameclass.js'
//import { Component } from "./component";



drawStartPage()
drawButtons()
drawInfo()
getStart()
drawLevels()


