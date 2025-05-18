const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 
const lines = input.trim().split('\n');
 
while (line = lines.shift()) {
 
    const numbers = line.split(' ').map(Number);

    if(numbers.length > 1){
        const diffList = [];
 
        numbers.map((num1, ind1) => {
            numbers.map((num2, ind2) => {
                if (ind1 !== ind2) {
                    const diff = Math.abs(num1 - num2);
                    const pair = `${num1} ${num2}`;
                    diffList.push([pair, diff]);
                }
            })
        })
 
        const sorted = diffList.sort((p1, p2) => p1[1] - p2[1])[0];
        console.log(sorted[1]);
    }
}
