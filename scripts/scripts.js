
const wordFirstMayus = (word) => {
  
  const firstLetter = word.charAt(0)

  return firstLetter.toUpperCase() + word.substring(1)

}

const camelCaseConverter = (words) => {

const resultArray = []

const wordsArray = words.split(" ")

for (let i = 1; i < wordsArray.length; i++) {
  let firstCaseMayus = wordFirstMayus(wordsArray[i])

  resultArray.push(firstCaseMayus)
}

return wordsArray[0] + resultArray.join("")

}

const userInput = document.getElementById('userInput')
const resultInput = document.getElementById('resultInput')
const convertButton = document.getElementById('convertButton')
const resetButton = document.getElementById('resetButton')

convertButton.addEventListener('click', function() {
   resultInput.value = camelCaseConverter(userInput.value)
   resultInput.classList.add("correct")
})

resetButton.addEventListener('click', function () {
  userInput.value = ""
  resultInput.value = ""
  resultInput.classList.remove("correct")
})

const titleImage = document.getElementById('titleImage')
const title = document.getElementById('title')
const convert = document.getElementById('convert')
const result = document.getElementById('result')

const mediaQuery = window.matchMedia('(min-width: 375px)')

if (mediaQuery.matches) {
  title.remove(titleImage)
  convert.removeChild(convertButton);
  result.removeChild(resetButton)
}

