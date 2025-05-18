'use strict';
function a0_0x1be7() {
    const _0x4627c7 = [
        'log',
        '31218836yFpmqn',
        '9MXYfnD',
        'split',
        '3Olitcy',
        'readFileSync',
        '7360816fGTHwc',
        '5483725TiAfcu',
        'trim',
        '14021rsJZiT',
        '17432650dBPFsL',
        '492124aTzDhG',
        '4rGSXVJ',
        '/dev/stdin',
        '4632eBEjrq',
        '2707600oFRKLl'
    ];
    a0_0x1be7 = function () {
        return _0x4627c7;
    };
    return a0_0x1be7();
}
function a0_0x1166(vPmwrR, key) {
    const stringArray = a0_0x1be7();
    a0_0x1166 = function (index, key) {
        index = index - 0x1e3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1166(vPmwrR, key);
}
const a0_0x5b7384 = a0_0x1166;
(function (stringArrayFunction, comparisonValue) {
    const _0x528f17 = a0_0x1166;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x528f17(0x1ec)) / 0x1 * (-parseInt(_0x528f17(0x1eb)) / 0x2) + -parseInt(_0x528f17(0x1e4)) / 0x3 * (parseInt(_0x528f17(0x1ef)) / 0x4) + parseInt(_0x528f17(0x1e7)) / 0x5 + -parseInt(_0x528f17(0x1ee)) / 0x6 * (-parseInt(_0x528f17(0x1e9)) / 0x7) + -parseInt(_0x528f17(0x1e6)) / 0x8 + parseInt(_0x528f17(0x1f2)) / 0x9 * (parseInt(_0x528f17(0x1ea)) / 0xa) + -parseInt(_0x528f17(0x1f1)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1be7, 0xe4648));
const main = arg => {
    const _0x44383b = a0_0x1166;
    arg = arg[_0x44383b(0x1e8)]()[_0x44383b(0x1e3)]('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    const K = parseInt(arg[0x0][_0x44383b(0x1e3)]('\x20')[0x1]);
    console[_0x44383b(0x1f0)](K === 0x1 ? 0x0 : N - K);
};
main(require('fs')[a0_0x5b7384(0x1e5)](a0_0x5b7384(0x1ed), 'utf8'));