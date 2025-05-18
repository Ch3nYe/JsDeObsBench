function main(input) {
  var marginDelete = input.trim();
  var args = marginDelete.split(' ');
  var n = parseInt(args[0], 10);
  var r = parseInt(args[1], 10);
  var hiddenRating;
  if ( n >= 10) {
    hiddenRating = r;
  } else {
    var argument = 100*(10 - n);
    hiddenRating = r + argument;
  }
  return hiddenRating;
}
console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));