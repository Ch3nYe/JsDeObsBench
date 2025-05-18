var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

var line;
var rectangles = 0;
var lozenges = 0;
while (line = lines.shift()) {
	var l = line.split(',').map(function(n){return +n;});
	var a = l[0];
	var b = l[1];
	var c = l[2];

	if (a * a + b * b == c * c)
		rectangles++;
	else if (a == b)
		lozenges++;
}
console.log(rectangles);
console.log(lozenges);