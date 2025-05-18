((stdin) => {
  var lines = stdin.trim().split('\n');
  var inputs = lines.shift().split(' ').map(Number);
  console.log(Math.floor((inputs[0] * 3 + inputs[1]) / 2));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));