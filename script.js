const inputEl = document.getElementById('text-input');
const resultEl = document.getElementById('result-msg');
const buttonEl = document.getElementById('check-btn');
let wordToCheck = '';
let result = '';

buttonEl.addEventListener('click', function (e) {
  e.preventDefault();
  palindrome(inputEl.value);
});

function palindrome(str) {
  const alphanumeric = str.match(/[a-zA-Z0-9]+/g);
  if (alphanumeric === null) {
    result = `let's say that nothingness is a palindrome`;
  } else {
    const firstWord = alphanumeric.join('').toLowerCase();
    const secondWord = firstWord.split('').reverse().join('');
    if (firstWord === secondWord) {
      result = `${str} is a palindrome`;
    } else result = `${str} is not a palindrome`;
  }
  resultEl.textContent = result;
  inputEl.value = '';
}
