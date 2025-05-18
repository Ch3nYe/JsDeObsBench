'use strict';
const a0_0x1a0dc3 = a0_0x1cef;
(function (stringArrayFunction, comparisonValue) {
    const _0x1956d1 = a0_0x1cef;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1956d1(0x116)) / 0x1 + parseInt(_0x1956d1(0x115)) / 0x2 + -parseInt(_0x1956d1(0x11d)) / 0x3 + -parseInt(_0x1956d1(0x117)) / 0x4 * (-parseInt(_0x1956d1(0x119)) / 0x5) + -parseInt(_0x1956d1(0x110)) / 0x6 * (-parseInt(_0x1956d1(0x111)) / 0x7) + parseInt(_0x1956d1(0x11b)) / 0x8 + -parseInt(_0x1956d1(0x120)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x9796, 0x5e9f9));
function a0_0x9796() {
    const _0x15ced0 = [
        'min',
        '45uksXMO',
        'map',
        '4689608zFqVfr',
        'push',
        '305211yfEktY',
        'split',
        'length',
        '7145370IqjVZK',
        'utf8',
        '77010JRAtIq',
        '329xwMdgJ',
        '/dev/stdin',
        'log',
        'trim',
        '1093934hUmays',
        '694945gFPnST',
        '107456CxOqdK'
    ];
    a0_0x9796 = function () {
        return _0x15ced0;
    };
    return a0_0x9796();
}
const Main = input => {
    const _0x204e20 = a0_0x1cef;
    let xs = input[_0x204e20(0x114)]()[_0x204e20(0x11e)]('\x0a');
    let N = Number(xs[0x0]);
    let A = Number(xs[0x1][_0x204e20(0x11e)]('\x20')[0x0]);
    let B = Number(xs[0x1][_0x204e20(0x11e)]('\x20')[0x1]);
    let P1 = [];
    let P2 = [];
    let P3 = [];
    let P = xs[0x2][_0x204e20(0x11e)]('\x20')[_0x204e20(0x11a)](v => parseInt(v, 0xa));
    for (let i = 0x0; i < N; i++) {
        if (P[i] <= A) {
            P1[_0x204e20(0x11c)](P[i]);
        } else if (P[i] <= B) {
            P2[_0x204e20(0x11c)](P[i]);
        } else {
            P3['push'](P[i]);
        }
    }
    let ans = Math[_0x204e20(0x118)](P1[_0x204e20(0x11f)], P2['length'], P3[_0x204e20(0x11f)]);
    console[_0x204e20(0x113)](ans);
};
function a0_0x1cef(JQREaZ, key) {
    const stringArray = a0_0x9796();
    a0_0x1cef = function (index, key) {
        index = index - 0x110;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1cef(JQREaZ, key);
}
Main(require('fs')['readFileSync'](a0_0x1a0dc3(0x112), a0_0x1a0dc3(0x121)));