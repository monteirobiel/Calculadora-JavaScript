const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('input');
const resultInput = document.querySelector('.result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelector('.charKey').forEach(function(charKeyBtn) {
    const value = charKeyBtn.dataset.value;
    input.value += value;
    input.focus();
})