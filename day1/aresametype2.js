//SAME PROBLEM - DIFFERENT SOLUTION BY USING A SECOND FUNCTION
function whatType(arr2) {
  //return Array.isArray(arr2) ? "array" : "object";
  if (typeof arr2 === "object") {
    return Array.isArray(arr2) ? "array" : "object";
  } //ends if statement
  return typeof arr2; //return type of array if not object
} //ends function

function areSameType(arr) {
  var first = whatType(arr[0]);
  for (var i = 1; i < arr.length - 1; i++){
    var others = whatType(arr[i]);
      if (first === others) {
        return true;
      }//ends if statement
    } //end for loop
    return false;
} //ends function

console.log(areSameType(['hello', 'world', 'long sentence'])); // => true
console.log(areSameType([1, 2, 9, 10])); // => true
console.log(areSameType([['hello'], 'hello', ['bye']])); // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true
