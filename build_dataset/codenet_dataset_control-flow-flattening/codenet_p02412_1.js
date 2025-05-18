const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\n/);
for (let i = 0; i < input.length; i++) {
    let [n, x] = input[i].split(' ').map(Number);
    if (n === 0 && x === 0) {
        break;
    }
    let count = 0;
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
             if (j === k) {
                 break;
             }
            for (let l = 1; l <= n; l++)  {
               if (j === l || k === l || j === k) {
                   break;
               }
               if (j + k + l === x) {
                  count++;
               }
           }
        }
    }
    console.log(count)
}

