//This function removes duplicates items with new Set Object

function removeDups(arr) {
  return Array.from(new Set(arr))
}