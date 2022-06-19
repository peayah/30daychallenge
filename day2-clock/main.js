const secondHand = document.querySelector(".second-hand");
function setDate() {
  
  
  const now = new Date ();
  const second = now.getSeconds()
  const secondsDegrees = ((seconds / 60) *360) +90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minute = now.getMinutes()
  console.log(minute)
  const hour = now.getHours()
  console.log(hour)
}

setInterval(setDate, 1000);
