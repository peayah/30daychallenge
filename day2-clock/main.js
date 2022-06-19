const secondHand = document.querySelector(".second-hand");
function setDate() {
  
  
  const now = new Date ();
  const second = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minute = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hour = now.getHours()
  const hourDegrees = ((hours / 12) * 360) +90;
}

setInterval(setDate, 1000);
