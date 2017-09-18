//create function that returns true if parameter is an array

function isArray(arr){
  console.log(Array.isArray(arr));
}
isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false
