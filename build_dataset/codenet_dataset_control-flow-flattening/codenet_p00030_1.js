function comb(r) {
	var c = [];
	c[0] = -1;
	var k = 1;
	c[1] = 0;
	var ret = [];

	while (k != 0) {
		for (var i = k + 1; i <= r; i++) {
			c[i] = c[i - 1] + 1;
		}

		var arr = []
		for (var i = 1; i <= r; i++) {
			arr.push(c[i]);
		}
		ret.push(arr);

		k = r;
		while (c[k] == 9 - r + k)
			k = k - 1;

		c[k] = c[k] + 1;
	}

	return ret;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

var line;
while (line = lines.shift()) {
	var nums = line.split(' ');
	var n = +nums[0];
	var s = +nums[1];
	if (n + s == 0)
		break;

	var c = comb(n);

	var cnt = 0;
	for (var i = 0; i < c.length; i++) {
		var arr = c[i];
		if (s == arr.reduce(function(prev, now){return prev + now;})) {
			cnt++;
		}
	}

	console.log(cnt);
}