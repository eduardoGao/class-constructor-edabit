class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${firstName} ${lastName}`
    this.email = `${firstName}.${lastName}@platzi.com`.toLowerCase()
  }
}

const std1 = new Student('Eduardo', 'Diaz')
const std2 = new Student('Diana', 'Reyes')
const std3 = new Student('Teresa', 'Vidal')

function showStudent(id) {
  console.log(id.firstName)
  console.log(id.lastName)
  console.log(id.fullName)
  console.log(id.email)
}

showStudent(std1)
showStudent(std2)
showStudent(std3)