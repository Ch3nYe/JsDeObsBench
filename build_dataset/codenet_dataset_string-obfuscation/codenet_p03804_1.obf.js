'use strict';
const a0_0x1d8062 = a0_0x3ec3;
(function (stringArrayFunction, comparisonValue) {
    const _0xd7a2ca = a0_0x3ec3;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xd7a2ca(0x1d0)) / 0x1 + -parseInt(_0xd7a2ca(0x1c3)) / 0x2 * (-parseInt(_0xd7a2ca(0x1cb)) / 0x3) + parseInt(_0xd7a2ca(0x1c6)) / 0x4 + parseInt(_0xd7a2ca(0x1c9)) / 0x5 + parseInt(_0xd7a2ca(0x1cc)) / 0x6 + -parseInt(_0xd7a2ca(0x1c7)) / 0x7 + -parseInt(_0xd7a2ca(0x1cd)) / 0x8 * (-parseInt(_0xd7a2ca(0x1d1)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2abb, 0x6a83b));
const input = require('fs')['readFileSync'](a0_0x1d8062(0x1d3), a0_0x1d8062(0x1ca))[a0_0x1d8062(0x1ce)]()[a0_0x1d8062(0x1c4)]('\x0a');
function a0_0x2abb() {
    const _0x3f6402 = [
        'log',
        '31888GMYiXc',
        '39519TNmjyb',
        'map',
        '/dev/stdin',
        'exit',
        '34bYwZSw',
        'split',
        'slice',
        '724492tjSjnn',
        '3201751WOoEMX',
        'Yes',
        '286200uSeXVl',
        'utf8',
        '46719oRaqoT',
        '1849764WXAyoN',
        '208cTjPjk',
        'trim'
    ];
    a0_0x2abb = function () {
        return _0x3f6402;
    };
    return a0_0x2abb();
}
function a0_0x3ec3(QBwPSl, key) {
    const stringArray = a0_0x2abb();
    a0_0x3ec3 = function (index, key) {
        index = index - 0x1c2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ec3(QBwPSl, key);
}
const NM = input[0x0]['split']('\x20')[a0_0x1d8062(0x1d2)](Number);
const N = NM[0x0];
const M = NM[0x1];
const As = input[a0_0x1d8062(0x1c5)](0x1, N + 0x1);
const Bs = input[a0_0x1d8062(0x1c5)](N + 0x1, N + M + 0x1);
for (let ax = 0x0; ax < N - M; ax++) {
    for (let ay = 0x0; ay < N - M; ay++) {
        let flag = !![];
        for (let bx = 0x0; bx < M; bx++) {
            for (let by = 0x0; by < M; by++) {
                if (As[ax + bx][ay + by] !== Bs[bx][by]) {
                    flag = ![];
                    break;
                }
            }
            if (!flag)
                break;
        }
        if (flag) {
            console[a0_0x1d8062(0x1cf)](a0_0x1d8062(0x1c8));
            process[a0_0x1d8062(0x1c2)](0x0);
        }
    }
}
console[a0_0x1d8062(0x1cf)]('No');