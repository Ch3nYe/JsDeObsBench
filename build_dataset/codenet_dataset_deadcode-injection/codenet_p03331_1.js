function main(input) {
  var digits = input.toString().length;
  var input = parseInt(input, 10);
 
  var divisor = Math.pow(10, digits - 1);
  var arr = [];
  for (var i = 0; i < digits; i++) {
  	arr.push(Math.floor(input / divisor))
  	input = input % divisor;
  	divisor /= 10;
 
  }
  var answer = arr.reduce((a, b) => a + b);
  if(answer == 1) {answer = 10;}
 
  console.log(answer);
 
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));