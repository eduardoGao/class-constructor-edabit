function redundant() {
  return function(str) {
    console.log(str)
  }
}
const word = redundant()

word('Apple')
word('Watermelon')