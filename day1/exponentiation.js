//exponentiation exercise

function exp(base, n){
if (n === 0) {
  return 1;
} //ends if
//below is recursive case
if (n > 0) { //for exponents greater than 0
return base * exp(base, n - 1 );  //multiply base by base (with exponent dwindling to 0)
} //ends if
} //ends function

console.log(exp(5,3));
console.log(exp(2,4));
