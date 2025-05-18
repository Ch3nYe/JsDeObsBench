const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
for (let i = 0x0; i < input['length']; i++) {
    let [n, x] = input[i]['split']('\x20')['map'](Number);
    if (n === 0x0 && x === 0x0) {
        break;
    }
    let count = 0x0;
    for (let j = 0x1; j <= n; j++) {
        for (let k = 0x1; k <= n; k++) {
            if (j === k) {
                break;
            }
            for (let l = 0x1; l <= n; l++) {
                if (j === l || k === l || j === k) {
                    break;
                }
                if (j + k + l === x) {
                    count++;
                }
            }
        }
    }
    console['log'](count);
}