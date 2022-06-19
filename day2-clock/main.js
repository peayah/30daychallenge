const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
                                        
function setDate() {
  
  // new date
  const now = new Date ();
  
  // seconds movment
  const second = now.getSeconds()
  const secDegrees = ((second / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secDegrees}deg)`;
  
  // minutes movement
  const minute = now.getMinutes()
  const minDegrees = ((minute / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  
  //hours movement
  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) +90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
