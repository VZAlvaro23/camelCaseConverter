
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

const text = document.getElementById('text')
const result = document.getElementById('result')
const convertButton = document.getElementById('convertButton')
const resetButton = document.getElementById('resetButton')

convertButton.addEventListener('click', function() {
   result.value = camelCaseConverter(text.value)
   result.classList.add("correct")
})

resetButton.addEventListener('click', function () {
  text.value = ""
  result.value = ""
  result.classList.remove("correct")
})

console.log(camelCaseConverter("soy alvaro el mesias"))

