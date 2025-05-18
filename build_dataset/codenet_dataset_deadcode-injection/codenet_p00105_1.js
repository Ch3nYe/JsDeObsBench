var d = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var info = line = '';
var map = [];

while (line = d.shift()) {
  info = line.split(' ');
  map.push([info[0], +info[1]]);
}
map.sort(function(a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  return 0;
});

var word = '';
var pages = [];
map.forEach(function(info, i) {
  if (word !== info[0]) {
    if (i !== 0) {
      console.log(pages.join(' '));
      pages = [];
    }
    console.log(info[0]);
  }
  pages.push(info[1]);
  word = info[0];
});
console.log(pages.join(' '));