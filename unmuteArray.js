// As it stands, only 1/4 tests pass
// Fix the code so that all tests pass
function change(x, times) {
	var x = x.slice()
  for (let i = 0; i < x.length; i++) {
		let j = 1; 
		while (j <= times) {
			if (i >= j && i < x.length - j) {
				x[i]--; 
			}
			j++; 
		}
	}
	return x; 
}

let x = [3, 3, 3, 3, 3, 3, 3]