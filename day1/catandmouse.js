function isCaught(str) {
  var catchMouse = /C.{1,2}[m]/g;
  var result = catchMouse.test(str);
  return result;
}
console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m')); // => true
console.log(isCaught('..C..m')); // => true
