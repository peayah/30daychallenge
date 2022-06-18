
function setDate() {
  const now = new Date ();
  const second = now.getSeconds()
  console.log(second)
  const minute = now.getMinutes()
  console.log(minute)
  const hour = now.getHours()
  console.log(hour)
}

setInterval(setDate, 1000);
