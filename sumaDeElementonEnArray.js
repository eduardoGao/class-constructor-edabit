function sumArray(arr) {
  function suma(a, b) {
    return a + b
  }
  console.log(arr.flat(2).reduce(suma)) 
}

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, [5, 2]]
const arr3 = [1, 2, 3, [5, 2, [4, 6]]]

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)