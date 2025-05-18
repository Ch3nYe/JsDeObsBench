'use strict';
function a0_0x1e75() {
    const _0x10ee83 = [
        '18966gHRjAy',
        '2845650VgIPLQ',
        '14TyljDU',
        '233478aBdgzb',
        '147648oSRXRm',
        '4XhFlka',
        'utf8',
        '10zyhzfF',
        '44fFdUIb',
        '/dev/stdin',
        'split',
        '165sWeuWJ',
        '1141256OueGej',
        '48018brozNz',
        '25791gOsKWu'
    ];
    a0_0x1e75 = function () {
        return _0x10ee83;
    };
    return a0_0x1e75();
}
function a0_0xd50f(eURqEZ, key) {
    const stringArray = a0_0x1e75();
    a0_0xd50f = function (index, key) {
        index = index - 0xe7;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd50f(eURqEZ, key);
}
const a0_0x380d2a = a0_0xd50f;
(function (stringArrayFunction, comparisonValue) {
    const _0x4829f0 = a0_0xd50f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4829f0(0xe9)) / 0x1 * (-parseInt(_0x4829f0(0xef)) / 0x2) + parseInt(_0x4829f0(0xf0)) / 0x3 * (-parseInt(_0x4829f0(0xe7)) / 0x4) + -parseInt(_0x4829f0(0xed)) / 0x5 * (-parseInt(_0x4829f0(0xf1)) / 0x6) + parseInt(_0x4829f0(0xf3)) / 0x7 * (-parseInt(_0x4829f0(0xee)) / 0x8) + -parseInt(_0x4829f0(0xf4)) / 0x9 + parseInt(_0x4829f0(0xf2)) / 0xa + -parseInt(_0x4829f0(0xea)) / 0xb * (parseInt(_0x4829f0(0xf5)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e75, 0x3f73b));
const main = arg => {
    const _0x34a7ca = a0_0xd50f;
    const input = arg['trim']()[_0x34a7ca(0xec)]('\x0a');
    let N = Number(input[0x0][_0x34a7ca(0xec)]('\x20')[0x0]);
    let x = Number(input[0x0][_0x34a7ca(0xec)]('\x20')[0x1]);
    let As = input[0x1][_0x34a7ca(0xec)]('\x20')['map'](n => Number(n));
    let manip = 0x0;
    for (let i = 0x0; i < N; i++) {
        let exceed = As[i] - x;
        if (exceed > 0x0) {
            As[i] = x;
            manip += exceed;
        }
    }
    for (let i = 0x1; i < N - 0x1; i++) {
        let left = As[i - 0x1];
        let current = As[i];
        let right = As[i + 0x1];
        if (left + current > x && current + right > x) {
            As[i] = x - left;
            manip += current - (x - left);
        }
    }
    for (let i = 0x0; i < N - 0x1; i++) {
        let current = As[i];
        let right = As[i + 0x1];
        if (current + right > x) {
            As[i] = x - right;
            manip += current - (x - right);
        }
    }
    console['log'](manip);
};
main(require('fs')['readFileSync'](a0_0x380d2a(0xeb), a0_0x380d2a(0xe8)));