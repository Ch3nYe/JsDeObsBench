function main() {
  var
  hands, pattern,
  swap,
  i = 0, j;
  for (;;) {
    if (input[i] == 0) break;
    
    
    hands = [];
    for (j = 0; j < 5; j++) {
      hands.push(Number(input[i++]));
    }
    
    pattern = hands.reduce(function (pat, h) {
      return (pat[h] = true, pat);
    }, {});
    
    keys = Object.keys(pattern).map(Number).sort(function (x, y) { return x - y; });
    
    if (keys.length === 2) {
      if (keys[1] - keys[0] == 2) {
        swap = keys[0];
        keys[0] = keys[1];
        keys[1] = swap;
      }
      hands.forEach(function (h) {
        console.log(keys.indexOf(h) + 1);
      });
    } else {
      hands.forEach(function () {
        console.log(3);
      });
    }
  }
}

var
input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
});