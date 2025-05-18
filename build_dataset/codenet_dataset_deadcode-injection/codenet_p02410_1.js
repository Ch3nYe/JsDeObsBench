var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = (input.trim()).split(/\n/g);
var n = +lines[0].split(' ')[0];
var m = +lines[0].split(' ')[1];

var A = lines.slice(1, m);
var b = lines.slice(m, m + m);

var ans;
for (var i = 0; i < n; i++) {
    ans = 0;
    for (var j = 0; j < m; j++) {
        ans += A[i].split(' ')[j] * b[j];
    }
    console.log(ans);
}