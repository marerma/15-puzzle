const score = ()=> {
  console.log (`My score is 105. I did not applied drag-n-drop function (-15)\n

Basic scope +30\n
 layout, design, responsive UI: +10 \n
 at the beginning state of the game, the frame is filled with randomly generated and shuffled numbers: +10 \n
 on click on a tile next to an empty cell, the tile moves to the empty cell: +10 \n
Advanced scope +50\n
 the game can be restarted without reloading the page: +10 \n
 game duration and number of moves are displayed: +10\n
 sound accompaniment (on/off) of tiles movement: +10\n
 implemented saving the state of the game and saving the top 10 results using LocalStorage: +10\n
 implemented selection of different sizes for frame: +10\n
Hacker scope +40
 when the game is finished, the following message is displayed "Hooray! You solved the puzzle in ##:## and N moves!". So that shuffled algorithm should work correctly - user can solve puzzle +10\n
 animation of tiles' movement on frame: +15\n`)

}

export {score}