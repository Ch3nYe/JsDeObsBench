var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

while (lines.length > 0) {
    var path = [];
    var line;
    while ((line = lines.shift()) != '0 0') {
        var nums = line.split(' ');
        var from = +nums[0];
        var to = +nums[1];

        path[from] = (path[from] || 0) +1;
        path[to] = (path[to] || 0) +1;
    }
    var odds = path.filter(function(n){return n % 2 == 1});
    if (path[1] % 2 == 1 && path[2] % 2 == 1 && odds.length > 2)
        console.log('NG');
    else
        console.log('OK');
}