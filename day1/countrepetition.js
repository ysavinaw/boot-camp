//count Repetitions and return Object
var xArray = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];

function countRepetition(arr) {
  var newObject = {}; //creating new empty object
  for (var i in arr) {  //for every element in array,
    if (newObject[xArray[i]]) { // if element in array is in new object = true,
      newObject[xArray[i]]++; //
    } else {
      newObject[xArray[i]] = 1;
    } //ends else statement
  } //ends for loop
  return newObject;
} //ends function
console.log(countRepetition(xArray));
