let word = 'Hello world unespected'

function reverse(str) {
  let convertArray = str.split(' ')
  for(i = 0; i < convertArray.length; i++) {
    if(convertArray[i].length >= 5) {
      convertArray[i] = convertArray[i].split('').reverse().join('')
    }
  }
  return console.log(convertArray.join('')) 
  // let reverseWord = convertArray.reverse()
  // let unirArray = reverseWord.join('')
}

reverse(word)

