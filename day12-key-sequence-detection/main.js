const pressed = [];
const secretCodeOne = 'elephant';
const secretCodeTwo = "whale"
const secretCodeThree = "tiger"
const secretCodeFour = "lion"
const secretCodeFive = "dog"

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(secretCodeOne.length - 1, pressed.length - secretCodeOne.length);
  if ((pressed.join('').includes(secretCodeOne)) || (pressed.join('').includes(secretCodeTwo)) || (pressed.join('').includes(secretCodeThree)) || (pressed.join('').includes(secretCodeThree)) || (pressed.join('').includes(secretCodeFour)) || (pressed.join('').includes(secretCodeFive))){
    console.log('You guessed it!');
    const youDidIt = "You did it"
    document.querySelector('h1').innerText.youDidIt

    cornify_add();
  }
  console.log(pressed);
});