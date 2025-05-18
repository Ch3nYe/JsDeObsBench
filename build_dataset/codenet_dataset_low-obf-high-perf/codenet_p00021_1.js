(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = Number(p.shift());
  var i = 0;
  while (i++ < n) {
    var args = p.shift().split(' ').map(Number);
    var x1 = args.shift();
    var y1 = args.shift();
    var x2 = args.shift();
    var y2 = args.shift();
    var x3 = args.shift();
    var y3 = args.shift();
    var x4 = args.shift();
    var y4 = args.shift();
    console.log(((y2 - y1) / (x2 - x1)).toFixed(5) === ((y4 - y3) / (x4 - x3)).toFixed(5) ? 'YES' : 'NO');
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));