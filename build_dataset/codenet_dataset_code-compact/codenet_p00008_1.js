//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

const MAX = 50;

map0 = [];
for (i = 0; i <= MAX; i++) map0.push(0);
map1 = [].concat(map0);
map2 = [].concat(map1);
map3 = [].concat(map2);

for (i = 0; i <= 9; i++) map0[i] = 1;

function expand_map(map, smaller) {
	for (var i = 0; i < MAX; i++) {
		for (var j = Math.max(0, i - 9); j <= i; j++) {
			map[i] += smaller[j];
		}
	}
}

expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);

require('fs').readFileSync(config.input, 'ascii')
	.trim()
	.split(config.newline)
	.forEach(function (line) { console.log(map3[parseInt(line)]); })
	;