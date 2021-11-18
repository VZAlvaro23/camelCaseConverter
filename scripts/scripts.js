
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
const convertButtonMobile = document.getElementById('convertButtonMobile')
const resetButtonMobile = document.getElementById('resetButtonMobile')


convertButton.addEventListener('click', function() {
   resultInput.value = camelCaseConverter(userInput.value)
   resultInput.classList.add("correct")
})

resetButton.addEventListener('click', function () {
  userInput.value = ""
  resultInput.value = ""
  resultInput.classList.remove("correct")
})

convertButtonMobile.addEventListener('click', function() {
  resultInput.value = camelCaseConverter(userInput.value)
  resultInput.classList.add("correct")
})

resetButtonMobile.addEventListener('click', function () {
 userInput.value = ""
 resultInput.value = ""
 resultInput.classList.remove("correct")
})







