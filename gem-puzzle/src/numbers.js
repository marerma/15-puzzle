import {getMatrix} from './additionalFunc.js'

const numbers = (level) => {
    let arr = []
    for(let i = 0; i < level*level; i++) {
      arr.push(i)}
      return arr
  }


function sortNumbersSolvable(array, iEmpty, jEmpty, iTarget, jTarget) {
   let temp = array[iEmpty][jEmpty]
   array[iEmpty][jEmpty] = array[iTarget][jTarget]
   array[iTarget][jTarget] = temp
}

function sortArraySolvable (array, level) {
  let lastInd = parseInt(level, 10) - 1
  let emptyIndX = 0
  let emptyIndY = 0
  array = getMatrix(array, level)
  
  for (let l = 0; l < 100; l++) {
    let randomN = Math.round(Math.random() * 3)
  
    switch (randomN) {
      case 0: 
    
      if (emptyIndX != 0) {
     
         sortNumbersSolvable(array, emptyIndX, emptyIndY, --emptyIndX, emptyIndY); //если пустая ячейка не стоит слева у границы, то сдвигаем ее влево
     
      }
      break;
     
      case 1:

        if (emptyIndY != lastInd) {
          sortNumbersSolvable(array, emptyIndX, emptyIndY, emptyIndX, ++emptyIndY);//если пустая ячейка не стоит вверху у границы, то сдвигаем ее влево
       
        }
         break;
     
      case 2:

      if (emptyIndX != lastInd) {
        sortNumbersSolvable(array, emptyIndX, emptyIndY, ++emptyIndX, emptyIndY); //если пустая ячейка не стоит справа у границы, то сдвигаем ее вправо
     
      }
       break;
  
      case 3:

      if (emptyIndY != 0) {
       sortNumbersSolvable(array, emptyIndX, emptyIndY, emptyIndX, --emptyIndY); //если пустая ячейка не стоит снизу у границы, то сдвигаем ее вниз
      }
      }
    }
    return array
  }



function sortNumbers (array) {
  let tmp, rnd
   for (let i = array.length-1; i > 0; i--) {
    tmp = array[i]
    rnd = Math.floor(Math.random()*(i + 1))
    array[i] = array[rnd];
    array[rnd] = tmp;
  }
    return array;
   }

export {numbers, sortNumbers, sortNumbersSolvable, sortArraySolvable}