const e1 = 'matt@edabit.com'
const e2 = 'bill.gates@microsoft.com'
const e3 = 'lalo-diaz1896@gmail.com'
const e4 = '@edabit.com'


function validateEmail(str) {
	if(/^[\w\.\-]+@[\w]{2,10}\.[\w]{2,5}$/.test(str)) {
    return console.log('Correcto')
  } else {
    console.log('Mal')
  }
}
validateEmail(e1)
validateEmail(e2)
validateEmail(e3)
validateEmail(e4)