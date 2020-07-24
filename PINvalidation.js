const nip1 = '1234'
const nip2 = 'a234'
const nip3 = '12345'
const nip4 = '123456'

function validatePIN(pin) {
  console.log(/^[\d]{4,4}$/.test(pin) || /^[\d]{6,6}$/.test(pin))
}

validatePIN(nip1)
validatePIN(nip2)
validatePIN(nip3)
validatePIN(nip4)