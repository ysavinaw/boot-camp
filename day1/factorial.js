//factorial

function factorial(num) {
//base case below
if (num === 0) {
  return 1; //factorial of 0 is one
} //ends if
//recursive case below
if (num > 0) {
  return num * factorial(num - 1);
} //ends if

}//ends function


console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(0));
