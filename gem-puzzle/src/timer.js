function getTime () {
  const timer = document.querySelector('.timer')
  let timeStr = (timer.textContent).replace('Time: ','')
  const timeStamp = {
    minutes: Number(timeStr.split(':')[0]),
    seconds: Number(timeStr.split(':')[1])
  }
  return timeStamp
}



export {getTime}
