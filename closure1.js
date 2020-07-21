function saludar() {
  const saludo = 'Hola, mi nombre es'
  return function privado(nombre) {
    console.log(`${saludo} ${nombre}`)
  }
}

const newSaludo = saludar()
newSaludo('Lalo')



function outside() { 
  let x = 2
  return function inside(y) {
    return console.log(x + y)
  } 
}

const newOutside = outside()
newOutside(4)
newOutside(6)