// SORTING AND REMOVING DUPLICATES

function longest(a, b) {
  var str = a + b;
  var newArray = [];
  for (var i = 0; i <= str.length - 1; i++) {
    if (newArray.indexOf(str[i]) === -1) {
      newArray.push(str[i]);
    }
  } //ends main  for loop
return newArray.sort();toString(); //sorts into alphebetical order and makes it a String
} //ends function

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
