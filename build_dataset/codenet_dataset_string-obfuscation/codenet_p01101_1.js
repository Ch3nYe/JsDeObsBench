const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

while (line = lines.shift()) {
	const [n, max] = line.split(' ').map(Number);

	if (n === 0 && max === 0) {break;}

	const prices = lines.shift().split(' ').map(Number);

	const allSum = [];

	prices.map((priceA, indexA) => {
			prices.map((priceB, indexB) => {
				if (indexA !== indexB) {
					const sum = priceA + priceB;

					if(sum <= max) {
						allSum.push(sum);
					}
				}
			})
		}
	);

	const answer = allSum.sort((a,b) => b - a)[0];

	if (answer) {
		console.log(answer);
		continue;
	}

	console.log('NONE');
}

