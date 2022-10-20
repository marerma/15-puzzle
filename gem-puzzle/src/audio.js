import {isPlay, isMuted} from './index.js'


const audio = new Audio()
audio.src = '../assets/odinochnyiy-stuk.mp3'


function playSong () { 
  audio.volume = 0.5
  audio.play() 
 }

 function pauseSong () {
  audio.pause();
  isMuted = true
 }



 export {playSong, pauseSong, isPlay, isMuted}