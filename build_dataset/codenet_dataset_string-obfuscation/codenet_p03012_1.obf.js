'use strict';
const a0_0x319f50 = a0_0x3632;
(function (stringArrayFunction, comparisonValue) {
    const _0x23d251 = a0_0x3632;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x23d251(0xe7)) / 0x1 * (-parseInt(_0x23d251(0xf5)) / 0x2) + parseInt(_0x23d251(0xeb)) / 0x3 * (-parseInt(_0x23d251(0xf2)) / 0x4) + -parseInt(_0x23d251(0xe9)) / 0x5 + -parseInt(_0x23d251(0xe8)) / 0x6 * (-parseInt(_0x23d251(0xee)) / 0x7) + -parseInt(_0x23d251(0xf6)) / 0x8 * (-parseInt(_0x23d251(0xec)) / 0x9) + -parseInt(_0x23d251(0xf0)) / 0xa + -parseInt(_0x23d251(0xf7)) / 0xb * (-parseInt(_0x23d251(0xed)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3dda, 0xe89d0));
function a0_0x3632(eQzdYd, key) {
    const stringArray = a0_0x3dda();
    a0_0x3632 = function (index, key) {
        index = index - 0xe7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3632(eQzdYd, key);
}
const INF = 0x3333333333333;
function mapint(temp) {
    const _0x564f11 = a0_0x3632;
    return temp[_0x564f11(0xef)]('\x20')[_0x564f11(0xf4)](v => parseInt(v));
}
function Main(input) {
    const _0xe9201c = a0_0x3632;
    let temp = input['trim']()[_0xe9201c(0xef)]('\x0a');
    let n = parseInt(temp[0x0]);
    let w = mapint(temp[0x1]);
    let s1 = w[0x0];
    let s2 = 0x0;
    for (let i = 0x1; i < n; i++) {
        s2 += w[i];
    }
    let sa = Math[_0xe9201c(0xf3)](s1 - s2);
    let sa2;
    for (let i = 0x1; i < n; i++) {
        s1 += w[i];
        s2 -= w[i];
        sa = Math['min'](sa, Math['abs'](s1 - s2));
    }
    console[_0xe9201c(0xf1)](sa);
}
function a0_0x3dda() {
    const _0x5353f5 = [
        'split',
        '17803310DkWsBJ',
        'log',
        '808RxkqSj',
        'abs',
        'map',
        '4uzunCe',
        '3688vNSXTz',
        '44LWctam',
        '631307pKcxgA',
        '103182txDzwf',
        '2230460hrkPgy',
        'utf8',
        '13746NJOkLv',
        '7848MmyvBN',
        '11130036syhlvX',
        '511otTSyw'
    ];
    a0_0x3dda = function () {
        return _0x5353f5;
    };
    return a0_0x3dda();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x319f50(0xea)));