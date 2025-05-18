(function(input) {
  var p = input.replace(/\n$/, '').split('\n').map(Number);
  var n = p.length;
  for (var i = 0; i < n; i++) {
    var g = p.shift();
    var s = [];
    g.toString(2).split('').reverse().map(function(e, i) {
      if (e == 1) {
        s.push(Math.pow(2, i));
      }
    });
    console.log(s.join(' '));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));