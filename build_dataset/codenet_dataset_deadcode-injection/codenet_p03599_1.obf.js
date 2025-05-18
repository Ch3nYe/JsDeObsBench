const a0_0x1afc80 = a0_0x94a7;
const input = require('fs')[a0_0x1afc80(0x0)](a0_0x1afc80(0x1), a0_0x1afc80(0x2));
(input => {
    const _0x8fd5cf = a0_0x94a7;
    const [A, B, C, D, E, F] = input[_0x8fd5cf(0x3)]()[_0x8fd5cf(0x4)]('\x20')[_0x8fd5cf(0x5)](Number);
    let W = {};
    let S = {};
    for (let i = 0x1; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = A * i * 0x64 + j * B * 0x64;
            if (s > F)
                break;
            W[s] = 0x1;
        }
    }
    const p = F * E / 0x64;
    for (let i = 0x0; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = C * i + D * j;
            if (s > p)
                break;
            S[s] = 0x1;
        }
    }
    let ans = [
        A * 0x64,
        0x0
    ];
    let max = 0x0;
    let r = E / 0x64;
    for (let i in W) {
        for (let j in S) {
            const t = i - 0x0 + (j - 0x0);
            const sw = j / i;
            if (sw > r || t > F)
                continue;
            if (sw > max) {
                max = sw;
                ans = [
                    t,
                    j
                ];
            }
        }
    }
    console[_0x8fd5cf(0x6)](ans[0x0], ans[0x1]);
})(input);
function a0_0x94a7(bbRnPg, key) {
    const stringArray = a0_0x2341();
    a0_0x94a7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x94a7(bbRnPg, key);
}
function a0_0x2341() {
    const _0x2c2790 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x2341 = function () {
        return _0x2c2790;
    };
    return a0_0x2341();
}