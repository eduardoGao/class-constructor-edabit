function add_suffix(suffix) {
  return function(word) {
    return console.log(word + suffix)
  }
}

const add_ly = add_suffix("ly")

add_ly("total")
add_ly("hopeless")