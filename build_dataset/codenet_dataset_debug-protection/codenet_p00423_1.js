(function(stdin) {
  var lines = stdin.trim().split('\n');
  while(1) {
    var line = lines.shift();
    if (line == '0') {
      break;
    }
    var n = Number(line);
    var a = 0, b = 0;
    for (var i = 0; i < n; i++) {
      var numbers = lines.shift().split(' ').map(Number);
      if (numbers[0] == numbers[1]) {
        a += numbers[0];
        b += numbers[0];
      } else if (numbers[0] > numbers[1]) {
        a += numbers[0] + numbers[1];
      } else {
      	b += numbers[0] + numbers[1];
      }
    }
    console.log([a, b].join(' '));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));