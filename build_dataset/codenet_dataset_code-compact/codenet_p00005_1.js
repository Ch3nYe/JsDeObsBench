//config = {stdin: 'tmp', newline: '\r\n'}; // win
config = {stdin: '/dev/stdin', newline: '\n'}; // linux

require('fs').readFileSync(config.stdin, 'ascii')
	.trim()
	.split(config.newline)
	.forEach(function (line) {
		var ary = line.split(' ');
		var a = ary[0], b = ary[1];
		console.log('%d %d', gcd(a, b), lcm(a, b));
	});

function gcd(a, b) {
	while (a !== b) {
		if (a < b) {
			var tmp = a;
			a = b;
			b = tmp;
		}
		if (a % b === 0) return b;
		a -= b;
	}
	return a;
}

function lcm(a, b) {
	var g = gcd(a, b);
	return g * (a / g) * (b / g);
}