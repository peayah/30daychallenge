const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand);
                                        
function setDate() {
  
  // new date
  const now = new Date ();
  
  // seconds movment
  const second = now.getSeconds()
  const secondsDegrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  // minutes movement
  const minute = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  //hours movement
  const hour = now.getHours()
  const hourDegrees = ((hours / 12) * 360) +90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
