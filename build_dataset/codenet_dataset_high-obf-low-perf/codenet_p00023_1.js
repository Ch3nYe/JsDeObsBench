(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = Number(p.shift());
  for (var i = 0; i < n; i++) {
    var args = p.shift().split(' ').map(Number);
    var xa = args.shift();
    var ya = args.shift();
    var ra = args.shift();
    var xb = args.shift();
    var yb = args.shift();
    var rb = args.shift();
    var d = Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));

    if (ra > d + rb) {
      console.log(2);
    } else if (rb > d + ra) {
      console.log(-2);
    } else if (d < ra + rb) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));