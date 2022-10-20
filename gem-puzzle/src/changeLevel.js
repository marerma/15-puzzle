

function changeLevel () {
  const levels = Array.from(document.querySelectorAll('.level-btn'))
  let level = levels.find(el => el.checked == true).id
  return level
  
  // levelArea.addEventListener('input', (e) => {
  //   const id = e.target.id
  //   levels.forEach(el => el.checked = false)
  //   e.target.checked = true
  //   level = id 
  //    console.log(level)
  //   })
  
}

export {changeLevel}