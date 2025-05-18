'use strict';
const a0_0x4ad1ee = a0_0xd370;
function a0_0x48c4() {
    const _0x59de2b = [
        'trim',
        'fill',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x48c4 = function () {
        return _0x59de2b;
    };
    return a0_0x48c4();
}
function a0_0xd370(pEUYOK, key) {
    const stringArray = a0_0x48c4();
    a0_0xd370 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd370(pEUYOK, key);
}
function main(inp) {
    const _0x2ec075 = a0_0xd370;
    inp = inp[_0x2ec075(0x0)]();
    const MOD = 0x3b9aca07;
    let dp = [new Array(0xd)[_0x2ec075(0x1)](0x0)];
    dp[0x0][0x0] = 0x1;
    for (let i = 0x0; i < inp[_0x2ec075(0x2)]; i++) {
        dp[i + 0x1] = new Array(0xd)[_0x2ec075(0x1)](0x0);
        const c = inp[i] === '?' ? -0x1 : inp[i] - 0x0;
        for (let j = 0x0; j < 0xa; j++) {
            if (c !== -0x1 && c !== j)
                continue;
            for (let k = 0x0; k < 0xd; k++) {
                dp[i + 0x1][(k * 0xa + j) % 0xd] += dp[i][k];
            }
        }
        for (let j = 0x0; j < 0xd; j++) {
            dp[i + 0x1][j] %= MOD;
        }
    }
    console[_0x2ec075(0x3)](dp[inp['length']][0x5]);
}
main(require('fs')[a0_0x4ad1ee(0x4)](a0_0x4ad1ee(0x5), 'utf8'));