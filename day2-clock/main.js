
function setDate() {
  const now = new Date ();
  const second = now.getSeconds()
  const minute = now.getMinutes()
  const hour = now.getHours()
}

setInterval(setDate, 1000);
