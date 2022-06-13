const guess = document.getElementById('guess');
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const tryAgain = document.querySelector('.tryAgain');
const result = document.querySelector('.result');

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
Math.floor(Math.random() * arr.length);
let random = arr[Math.floor(Math.random() * arr.length)];

guess.innerHTML = `Guess the number from 1 to ${random}`;

// //event listeners
submitBtn.addEventListener('click', submitNumber);

// //tins

// console.log(random);

let randomNumber = Math.ceil(Math.random() * random);

// functions
function submitNumber(e) {
  e.preventDefault();
  //   console.log(randomNumber);
  //   console.log(guessInput.value);
  if (guessInput.value == randomNumber) {
    result.innerHTML = 'You Won!';
  } else if (guessInput.value > randomNumber && guessInput.value <= random) {
    result.innerHTML = 'Number too high, try again';
  } else if (guessInput.value < randomNumber && guessInput.value >= 1) {
    result.innerHTML = 'Number too low, gtry again';
  } else if (guessInput.value === '' || guessInput.value == ' ' ) {
    result.innerHTML = 'You did not enter a number';
  } else if (guessInput.value > random || guessInput.value < 1) {
    result.innerHTML = `The number must be between 1 and ${random}`;
  } else {
    result.innerHTML = 'Not a number';
  }

  guessInput.value = '';
}

function refreshPage() {
  location.reload();
}

tryAgain.addEventListener('click', refreshPage);
