//Remove duplicate items and sort them in an array

function uniqueSort(arr) {
  let newArr = Array.from(new Set(arr))
  return newArr.sort((a, b) => (a - b))
}