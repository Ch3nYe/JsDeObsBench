Main(function(input) {
	input = input.trim().split('\n');
	input.shift();
	input.forEach(function(line) {
		var tmp = line.split(' ');
		var c = +tmp[0];
		var a = +tmp[1];
		var n = +tmp[2];
		var ans = 0;
		var min;

		/**
		 * CAN pattern
		 */
		min = Math.min(c, a, n);
		c -= min;
		a -= min;
		n -= min;
		ans += min;

		/**
		 * CCA pattern
		 */
		min = Math.min(Math.floor(c / 2), a);
		c -= min * 2;
		a -= min;
		ans += min;

		/**
		 * CCC pattern
		 */
		ans += Math.floor(c / 3);

		console.log(ans);
	});
});

function Main(main) {
	var input = '';

	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function(chunk) {
		input += chunk;
	});
	process.stdin.on('end', function() {
		main(input);
	});
};