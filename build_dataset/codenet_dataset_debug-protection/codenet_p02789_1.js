function main(input) {
  var args = input.split(' ');
  var n = parseInt(args[0], 10);
  var m = parseInt(args[1], 10);
  if ( n === m) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));