var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var w = +lines.shift();
var n = +lines.shift();

var list = [];
var line = null;
while (line = lines.shift()) {
    var args = line.split(',');
    list.push(args);
}

var answers = [];
for (var i = 1; i <= w; i++) {
    var k = i;
    list.forEach(function(args) {
        if (args[0] == k) {
            k = args[1];
        } else if (args[1] == k) {
            k = args[0];
        }
    });
    answers[k] = i;
}
answers.shift();
console.log(answers.join('\n'));