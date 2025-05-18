var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');
 
var lm = [];
var line;
while (line = lines.shift()) {
    lm.push(line.split(',')[0]);
}

var tm = [];
while (line = lines.shift()) {
    tm.push(line.split(',')[0]);
}

lm.sort(function(a,b){return a-b;});

lm.forEach(function(c) {
    var cnt = tm.filter(function(n){return n == c;}).length;
    if (cnt > 0) {
        var tcnt = lm.filter(function(n){return n == c}).length;
        console.log(c, cnt + tcnt);
    }
});