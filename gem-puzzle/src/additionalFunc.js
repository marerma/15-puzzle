function getMatrix(array, diff) {
  const result = [];
 for (let i = 0; i < array.length; i += parseInt(diff, 10)) {
   result.push(array.slice(i, i + parseInt(diff, 10)));
 } 
 return result;
}


function setGridTemplate (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j].style.gridColumn = `${j+1}/${j+2}`
      array[i][j].style.gridRow = `${i+1}/${i+2}`
    }
  }
}


export {getMatrix, setGridTemplate}