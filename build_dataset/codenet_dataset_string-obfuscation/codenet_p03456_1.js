function Main(input){
  var inp = input.split(' ');
  var a = inp[0];
  var b = inp[1];
  var n = parseInt(a + b);
  var flsqn = Math.floor(Math.sqrt(n));
  flsqn * flsqn === n ? console.log('Yes') : console.log('No');
//  (Math.floor(Math.sqrt(n))) ** 2 ? console.log('Yes') : console.log('No');
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));