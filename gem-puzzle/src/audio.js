import {isPlay, isMuted} from './index.js'
import audioFile from './assets/odinochnyiy-stuk.mp3'

const audio = new Audio()
audio.src = audioFile


function playSong () { 
  audio.volume = 0.5
  audio.play() 
 }

 function pauseSong () {
  audio.pause();
  isMuted = true
 }



 export {playSong, pauseSong, isPlay, isMuted}