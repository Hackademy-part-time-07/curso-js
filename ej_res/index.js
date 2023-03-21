let acom = 1
let n_fac = prompt()

console.log(isNaN(n_fac));

if (isNaN(n_fac)) {
  alert('error')
} else {
  for (let i = 1; i <= n_fac; i++) {
    acom = acom * i
  }
}

console.log(acom);

let num_ale = function (n) {
  parseInt(Math.random(n)*(1,100))
}

for (let i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log(i,'javascript');
  } else  if (i % 3 == 0) {
    console.log(i,'java');
  } else if (i % 5 == 0) {
    console.log(i,'script');
  } 
}
