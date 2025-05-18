'use strict';

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const NM = input[0].split(' ').map(Number);
const N = NM[0];
const M = NM[1];
const As = input.slice(1, N + 1);
const Bs = input.slice(N + 1, N + M + 1);

for (let ax = 0; ax < N - M; ax++) {
    for (let ay = 0; ay < N - M; ay++) {
        let flag = true;
        for (let bx = 0; bx < M; bx++) {
            for (let by = 0; by < M; by++) {
                if (As[ax + bx][ay + by] !== Bs[bx][by]) {
                    flag = false;
                    break;
                }
            }
            if (!flag) break;
        }

        if (flag) {
            console.log('Yes');
            process.exit(0);
        }
    }
}
console.log('No');