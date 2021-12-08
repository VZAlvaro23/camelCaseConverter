const wordFirstMayus = (word) => {
  const firstLetter = word.charAt(0);

  return firstLetter.toUpperCase() + word.substring(1);
};

const camelCaseConverter = (words) => {
  const resultArray = [];

  const wordsArray = words.split(' ');

  for (let i = 1; i < wordsArray.length; i += 1) {
    const firstCaseMayus = wordFirstMayus(wordsArray[i]);

    resultArray.push(firstCaseMayus);
  }

  return wordsArray[0] + resultArray.join('');
};

const userInput = document.getElementById('userInput');
const resultInput = document.getElementById('resultInput');
const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');
const convertButtonMobile = document.getElementById('convertButtonMobile');
const resetButtonMobile = document.getElementById('resetButtonMobile');

convertButton.addEventListener('click', () => {
  resultInput.value = camelCaseConverter(userInput.value);
  resultInput.classList.add('correct');
});

resetButton.addEventListener('click', () => {
  userInput.value = '';
  resultInput.value = '';
  resultInput.classList.remove('correct');
});

convertButtonMobile.addEventListener('click', () => {
  resultInput.value = camelCaseConverter(userInput.value);
  resultInput.classList.add('correct');
});

resetButtonMobile.addEventListener('click', () => {
  userInput.value = '';
  resultInput.value = '';
  resultInput.classList.remove('correct');
});

/* Página actual activo */

const actualUrl = location.href;
const camelCaseConverterButton = document.getElementById('camel-button');
const RomanNumeralConverterButton = document.getElementById('banco-button');
const camelCaseConverterButtonUrl = document.getElementById('camelCaseConverterButtonUrl').getAttribute('href');
const RomanNumeralConverterButtonUrl = document.getElementById('RomanNumeralConverterButtonUrl').getAttribute('href');
if (!actualUrl.includes(RomanNumeralConverterButtonUrl)) {
  RomanNumeralConverterButton.classList.add('active');
} else { camelCaseConverterButton.classList.add('active'); }
