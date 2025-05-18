'use strict';
function a0_0x410e(dbgENE, key) {
    const stringArray = a0_0x23df();
    a0_0x410e = function (index, key) {
        index = index - 0xa8;
        let value = stringArray[index];
        return value;
    };
    return a0_0x410e(dbgENE, key);
}
const a0_0x5842f1 = a0_0x410e;
(function (stringArrayFunction, comparisonValue) {
    const _0x4d2b42 = a0_0x410e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4d2b42(0xac)) / 0x1 * (parseInt(_0x4d2b42(0xb5)) / 0x2) + parseInt(_0x4d2b42(0xad)) / 0x3 + -parseInt(_0x4d2b42(0xa8)) / 0x4 + -parseInt(_0x4d2b42(0xa9)) / 0x5 + -parseInt(_0x4d2b42(0xb7)) / 0x6 * (parseInt(_0x4d2b42(0xb1)) / 0x7) + -parseInt(_0x4d2b42(0xb2)) / 0x8 * (parseInt(_0x4d2b42(0xaa)) / 0x9) + parseInt(_0x4d2b42(0xb3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x23df, 0x85c46));
function a0_0x23df() {
    const _0x2c08f7 = [
        'readFileSync',
        'trim',
        'Yes',
        '63VljCor',
        '740536fwPcrF',
        '14004780kRwZdu',
        'log',
        '730aetKoD',
        '/dev/stdin',
        '346350sUcIXJ',
        '1257816PtINEr',
        '1012265lxQGtc',
        '18evmxtu',
        'utf8',
        '225dCgHhm',
        '860619EcAiES'
    ];
    a0_0x23df = function () {
        return _0x2c08f7;
    };
    return a0_0x23df();
}
const main = input => {
    const _0xaba955 = a0_0x410e;
    const args = input[_0xaba955(0xaf)]()['split']('\x20');
    const a = parseInt(args[0x0], 0xa);
    const b = parseInt(args[0x1], 0xa);
    const c = parseInt(args[0x2], 0xa);
    if (c >= a && c <= b)
        console[_0xaba955(0xb4)](_0xaba955(0xb0));
    else
        console['log']('No');
};
main(require('fs')[a0_0x5842f1(0xae)](a0_0x5842f1(0xb6), a0_0x5842f1(0xab)));