
//Create function that returns true when parameter is string

function isString(str) {
  if (typeof str === 'string'){
    console.log(true);
  } else {
    console.log(false);
  }
}
isString('hello')   //true
isString(['what what']); //false
isString({ a : 2 });  //true
