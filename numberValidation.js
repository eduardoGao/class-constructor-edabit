const num1 = '(123) 456-7890'
const num2 = '(519) 505-6498'
const num3 = '(123) 456-7890abc'
const num4 = 'abc(123) 456-7890'
const num5 = 'abc(123) 456-7890abc'

function validateNumber(number) {
  (/^\(.+\)\s[\d]{3,3}-[\d]{4,4}$/.test(number))
    ? console.log('número correcto')
    : console.log('número invalido')
}

validateNumber(num1)
validateNumber(num2)
validateNumber(num3)
validateNumber(num4)
validateNumber(num5)

