(function () {
	var max, max_log2, series, col, j, str, i, line, hw, even, odd;
	
	max = 300;
	max_log2 = max.toString(2).length - 1;

	series = [1, 2];
	col = ['#', '#.'];
	j = 2;
	str = '#.';
	for (i = 2; i <= max_log2; i++) {
		series.push(j *= 2);
		col.push(str = str + str);
	}
	series.push(series[series.length-1] * 2);

	function get_column(w) {
		var i, res;
		res = "";
		for (i = 1; i < series.length; i++) {
			if (w < series[i]) break;
			if (w % series[i+1] >= series[i])
				res = res + col[i];
		}
		if (w % 2 === 1) res = res + '#';
		return res;
	}

	line = require('fs').readFileSync('/dev/stdin', 'ascii').split('\n');
	for (i in line) {
		if (line[i] === '0 0') break;
		hw = line[i].split(' ').map(Number);
		even = get_column(hw[1]);
		odd = even.slice(1) + ((hw[1] % 2 === 0) ? '#' : '.');
		for (j = 0; j < hw[0]; j++) {
			if (j % 2 === 0) console.log(even);
			else console.log(odd);
		}
		console.log("");
	}
}) ();