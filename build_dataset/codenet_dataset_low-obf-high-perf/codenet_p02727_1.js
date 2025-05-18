var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const parse = (s, sep) => {
  return s.split(sep).map(v => parseInt(v));
}
const split = (s, sep, result, keys) => {
  var arr = parse(s, sep);
  for (var i = 0; i < arr.length; i++) {
    result[keys[i]] = arr[i];
  }
}

var inp = {};
split(lines[0], ' ', inp, ['x', 'y', 'a', 'b', 'c']);
var p = parse(lines[1], ' ').sort((a, b) => b - a);
var q = parse(lines[2], ' ').sort((a, b) => b - a);
var r = parse(lines[3], ' ').sort((a, b) => b - a);
p = p.slice(0, inp.x);
q = q.slice(0, inp.y);

console.log(p.concat(q, r).sort((a, b) => b - a).slice(0, inp.x + inp.y).reduce((a, b) => a + b, 0));
