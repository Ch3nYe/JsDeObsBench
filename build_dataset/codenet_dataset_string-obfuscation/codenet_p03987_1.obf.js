'use strict';
const a0_0x1008f5 = a0_0x2e15;
function a0_0x39cc() {
    const _0x246db6 = [
        '242qbFPxu',
        '643313GkQgKB',
        '2607690gnBdeo',
        'shift',
        '35FVzLev',
        '1344qAuvrJ',
        'log',
        'sort',
        'trim',
        'readFileSync',
        '549663eWdvhp',
        '208146kPmSPs',
        '96Iseqvr',
        '1497850verRHB',
        '56200DpdVIR',
        '4FMUwHc',
        'length',
        '45FhiDuV',
        'split',
        '/dev/stdin'
    ];
    a0_0x39cc = function () {
        return _0x246db6;
    };
    return a0_0x39cc();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4295ac = a0_0x2e15;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4295ac(0x10e)) / 0x1 * (parseInt(_0x4295ac(0x11d)) / 0x2) + -parseInt(_0x4295ac(0x113)) / 0x3 * (-parseInt(_0x4295ac(0x118)) / 0x4) + -parseInt(_0x4295ac(0x10b)) / 0x5 + -parseInt(_0x4295ac(0x114)) / 0x6 * (-parseInt(_0x4295ac(0x10d)) / 0x7) + parseInt(_0x4295ac(0x117)) / 0x8 * (-parseInt(_0x4295ac(0x11a)) / 0x9) + -parseInt(_0x4295ac(0x116)) / 0xa + parseInt(_0x4295ac(0x10a)) / 0xb * (parseInt(_0x4295ac(0x115)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39cc, 0x4488c));
const lines = require('fs')[a0_0x1008f5(0x112)](a0_0x1008f5(0x11c), 'utf8')[a0_0x1008f5(0x111)]()[a0_0x1008f5(0x11b)]('\x0a');
const N = +lines[0x0];
const A = lines[0x1][a0_0x1008f5(0x11b)]('\x20');
let indices = [];
for (let i = 0x0; i < N; i++) {
    A[i] = +A[i];
    indices[indices['length']] = i;
}
indices = indices[a0_0x1008f5(0x110)]((a, b) => A[a] - A[b]);
let sum = 0x0, que = [[
            0x0,
            N - 0x1,
            0x0
        ]];
function a0_0x2e15(mYUBLj, key) {
    const stringArray = a0_0x39cc();
    a0_0x2e15 = function (index, key) {
        index = index - 0x10a;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2e15(mYUBLj, key);
}
while (que['length'] > 0x0) {
    let lri = que[a0_0x1008f5(0x10c)](), left = lri[0x0], right = lri[0x1], index = lri[0x2];
    if (left > right)
        continue;
    let i = index;
    while (indices[i] < left || indices[i] > right)
        i++;
    let ind = indices[i];
    sum += A[ind] * (ind - left + 0x1) * (right - ind + 0x1);
    if (left <= ind - 0x1)
        que[que[a0_0x1008f5(0x119)]] = [
            left,
            ind - 0x1,
            i + 0x1
        ];
    if (ind + 0x1 <= right)
        que[que[a0_0x1008f5(0x119)]] = [
            ind + 0x1,
            right,
            i + 0x1
        ];
}
console[a0_0x1008f5(0x10f)](sum);