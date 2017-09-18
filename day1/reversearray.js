//convert number to reversed array of digits
function convert(num) {
n = num.toString();
return n.split("").reverse().join("");
}
console.log(convert(429563));
console.log(convert(324));
