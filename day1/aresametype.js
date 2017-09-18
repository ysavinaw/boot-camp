//Create a function that checks whether all the element of an array are the same datatype

function areSameType(arr){
  for (var i = 0; i <arr.length - 1; i++){
    for (var j = i + 1; j < arr.length - 1; j++){
      if (typeof arr[i] === typeof arr[j]) {
          return true;
        }//end if statement
      } //end nested for loop
    } return false; // return false after the first for loop
}
console.log(areSameType(['hello', 'world', 'long sentence'])); // => true
console.log(areSameType([1, 2, 9, 10])); // => true
console.log(areSameType([['hello'], 'hello', ['bye']])); // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true
