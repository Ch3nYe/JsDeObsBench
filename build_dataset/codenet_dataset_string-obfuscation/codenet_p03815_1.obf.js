'use strict';
const a0_0x433f9b = a0_0x4de5;
function a0_0x40f9() {
    const _0x57b980 = [
        'log',
        '7356330ZJqIlG',
        '291TuRRln',
        '69712ZxInFH',
        '3461919HhVdVB',
        '1141CHUVQV',
        'floor',
        'utf8',
        '/dev/stdin',
        '1322BqGWMM',
        '5142198qBXCnO',
        '20kXpQhm',
        '902612fDYwjy',
        '18190278Bghaiy',
        'split',
        'trim'
    ];
    a0_0x40f9 = function () {
        return _0x57b980;
    };
    return a0_0x40f9();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x181900 = a0_0x4de5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x181900(0x133)) / 0x1 * (parseInt(_0x181900(0x12a)) / 0x2) + -parseInt(_0x181900(0x135)) / 0x3 + -parseInt(_0x181900(0x12d)) / 0x4 + -parseInt(_0x181900(0x132)) / 0x5 + parseInt(_0x181900(0x12b)) / 0x6 + -parseInt(_0x181900(0x126)) / 0x7 * (parseInt(_0x181900(0x134)) / 0x8) + -parseInt(_0x181900(0x12e)) / 0x9 * (-parseInt(_0x181900(0x12c)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x40f9, 0xc84aa));
const main = arg => {
    const _0x52df2b = a0_0x4de5;
    const input = arg[_0x52df2b(0x130)]()[_0x52df2b(0x12f)]('\x0a');
    let x = Number(input[0x0][_0x52df2b(0x12f)]('\x20')[0x0]);
    if (x % 0xb > 0x6) {
        console[_0x52df2b(0x131)](Math[_0x52df2b(0x127)](x / 0xb) * 0x2 + 0x2);
    } else if (x % 0xb > 0x0) {
        console[_0x52df2b(0x131)](Math[_0x52df2b(0x127)](x / 0xb) * 0x2 + 0x1);
    } else {
        console['log'](Math[_0x52df2b(0x127)](x / 0xb) * 0x2);
    }
};
function a0_0x4de5(xWgBtE, key) {
    const stringArray = a0_0x40f9();
    a0_0x4de5 = function (index, key) {
        index = index - 0x126;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4de5(xWgBtE, key);
}
main(require('fs')['readFileSync'](a0_0x433f9b(0x129), a0_0x433f9b(0x128)));