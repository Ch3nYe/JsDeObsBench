var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');
 
var ret = lines.filter(function(line) {
    var items = line.split(',');
    var w = +items[1];
    var h = +items[2];

    return w / (h * h) >= 25;
});

ret.forEach(function(line) {
    console.log(line.split(',')[0]);
});