'use strict';
const a0_0xe61284 = a0_0x5190;
(function (stringArrayFunction, comparisonValue) {
    const _0x42858a = a0_0x5190;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x42858a(0x1e8)) / 0x1 * (parseInt(_0x42858a(0x1db)) / 0x2) + -parseInt(_0x42858a(0x1dd)) / 0x3 + -parseInt(_0x42858a(0x1e1)) / 0x4 * (parseInt(_0x42858a(0x1da)) / 0x5) + parseInt(_0x42858a(0x1e9)) / 0x6 * (parseInt(_0x42858a(0x1e7)) / 0x7) + -parseInt(_0x42858a(0x1dc)) / 0x8 * (parseInt(_0x42858a(0x1eb)) / 0x9) + parseInt(_0x42858a(0x1ea)) / 0xa + parseInt(_0x42858a(0x1e5)) / 0xb * (parseInt(_0x42858a(0x1ec)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4caf, 0xb6d20));
process[a0_0xe61284(0x1de)]['resume']();
process[a0_0xe61284(0x1de)][a0_0xe61284(0x1d9)](a0_0xe61284(0x1e0));
let inputString = '';
function a0_0x4caf() {
    const _0x40ce2f = [
        'fill',
        'split',
        'map',
        '671yhZovk',
        'log',
        '6932947KTmiXR',
        '313nWLdmA',
        '6lrYRZS',
        '10942740ZjLbNs',
        '3199869ZOQmTC',
        '99768JTXQAb',
        'data',
        'setEncoding',
        '6465ihrykj',
        '8884vBlnfw',
        '8axsisy',
        '4378203PlOLNO',
        'stdin',
        'end',
        'utf-8',
        '4388odwEBV'
    ];
    a0_0x4caf = function () {
        return _0x40ce2f;
    };
    return a0_0x4caf();
}
let currentLine = 0x0;
process[a0_0xe61284(0x1de)]['on'](a0_0xe61284(0x1ed), inputStdin => {
    inputString += inputStdin;
});
process[a0_0xe61284(0x1de)]['on'](a0_0xe61284(0x1df), _ => {
    const _0xe34fec = a0_0xe61284;
    inputString = inputString[_0xe34fec(0x1e3)]('\x0a');
    main();
});
function a0_0x5190(nTjzws, key) {
    const stringArray = a0_0x4caf();
    a0_0x5190 = function (index, key) {
        index = index - 0x1d9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5190(nTjzws, key);
}
function readLine() {
    return inputString[currentLine++];
}
function F(N, A, B) {
    const _0x107e42 = a0_0xe61284;
    let dp = Array(N + 0x1)[_0x107e42(0x1e2)](0x0);
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
    const _0x418375 = a0_0xe61284;
    const n = parseInt(readLine(), 0xa);
    const a = readLine()[_0x418375(0x1e3)]('\x20')[_0x418375(0x1e4)](_ => parseInt(_, 0xa));
    const b = readLine()[_0x418375(0x1e3)]('\x20')['map'](_ => parseInt(_, 0xa));
    let n1 = F(n, a, b);
    let n2 = F(n1, b, a);
    console[_0x418375(0x1e6)](n2);
}