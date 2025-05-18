'use strict';
const a0_0x25bc74 = a0_0x318f;
process[a0_0x25bc74(0x0)][a0_0x25bc74(0x1)]();
process[a0_0x25bc74(0x0)][a0_0x25bc74(0x2)](a0_0x25bc74(0x3));
let inputString = '';
function a0_0x4335() {
    const _0x37df19 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf-8',
        'data',
        'end',
        'split',
        'fill',
        'map',
        'log'
    ];
    a0_0x4335 = function () {
        return _0x37df19;
    };
    return a0_0x4335();
}
function a0_0x318f(ZVZDCZ, key) {
    const stringArray = a0_0x4335();
    a0_0x318f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x318f(ZVZDCZ, key);
}
let currentLine = 0x0;
process[a0_0x25bc74(0x0)]['on'](a0_0x25bc74(0x4), inputStdin => {
    inputString += inputStdin;
});
process[a0_0x25bc74(0x0)]['on'](a0_0x25bc74(0x5), _ => {
    const _0x4414ce = a0_0x318f;
    inputString = inputString[_0x4414ce(0x6)]('\x0a');
    main();
});
function readLine() {
    return inputString[currentLine++];
}
function F(N, A, B) {
    const _0x1f1ed5 = a0_0x318f;
    let dp = Array(N + 0x1)[_0x1f1ed5(0x7)](0x0);
    for (let n = 0x0; n <= N; n++) {
        let x = n;
        for (let j = 0x0; j < 0x3; j++) {
            if (n >= A[j]) {
                let y = dp[n - A[j]] + B[j];
                if (x < y) {
                    x = y;
                }
            }
        }
        dp[n] = x;
    }
    return dp[N];
}
function main() {
    const _0x11dc86 = a0_0x318f;
    const n = parseInt(readLine(), 0xa);
    const a = readLine()[_0x11dc86(0x6)]('\x20')[_0x11dc86(0x8)](_ => parseInt(_, 0xa));
    const b = readLine()[_0x11dc86(0x6)]('\x20')[_0x11dc86(0x8)](_ => parseInt(_, 0xa));
    let n1 = F(n, a, b);
    let n2 = F(n1, b, a);
    console[_0x11dc86(0x9)](n2);
}