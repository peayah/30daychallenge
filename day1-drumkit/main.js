function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return // stop function if no audio key is hit
  audio.currentTime=0; // start over
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));	
window.addEventListener("keydown", playSound);
