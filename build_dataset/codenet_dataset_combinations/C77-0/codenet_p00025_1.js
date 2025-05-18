var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var imagine;
while (imagine = lines.shift()) {
	var guess = lines.shift();

	var a = imagine.split(' ').map(function(n){return +n;});
	var b = guess.split(' ').map(function(n){return +n;});

	var hit = 0;
	for (var i = 0; i < 4; i++) {
		if (a[i] == b[i]) {
			hit++;
		}
	}

	var blow = 0;
	for (var i = 0; i < 4; i++) {
		if (a.indexOf(b[i]) >= 0) {
			blow++;
		}
	}
	blow -= hit;

	console.log(hit + ' ' + blow);
}