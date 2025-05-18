'use strict';
const a0_0x5d4578 = a0_0x3bc3;
function a0_0x3bc3(uCHpgm, key) {
    const stringArray = a0_0x44a9();
    a0_0x3bc3 = function (index, key) {
        index = index - 0x10f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3bc3(uCHpgm, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x43934e = a0_0x3bc3;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x43934e(0x110)) / 0x1 * (parseInt(_0x43934e(0x117)) / 0x2) + parseInt(_0x43934e(0x10f)) / 0x3 * (parseInt(_0x43934e(0x11a)) / 0x4) + parseInt(_0x43934e(0x11b)) / 0x5 + parseInt(_0x43934e(0x11c)) / 0x6 + parseInt(_0x43934e(0x118)) / 0x7 * (-parseInt(_0x43934e(0x112)) / 0x8) + -parseInt(_0x43934e(0x111)) / 0x9 + -parseInt(_0x43934e(0x115)) / 0xa * (-parseInt(_0x43934e(0x11d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x44a9, 0xe624d));
function main(s) {
    const _0x1040f4 = a0_0x3bc3;
    const nums = s[_0x1040f4(0x113)]('\x0a')[0x0]['split']('\x20')[_0x1040f4(0x11e)](n => Number(n));
    const ans = Math['max'](...nums) - Math[_0x1040f4(0x119)](...nums);
    console[_0x1040f4(0x116)](ans);
}
function a0_0x44a9() {
    const _0x4d8f12 = [
        'min',
        '1417268zDUIxn',
        '123905iczCmj',
        '11297136KqwjVr',
        '14542FYSTJu',
        'map',
        '3njgEiH',
        '1jFhyjq',
        '13026465vshXyN',
        '104iYkJXm',
        'split',
        'readFileSync',
        '10740fAwLSO',
        'log',
        '258890pyUiEa',
        '765247XvbrVR'
    ];
    a0_0x44a9 = function () {
        return _0x4d8f12;
    };
    return a0_0x44a9();
}
main(require('fs')[a0_0x5d4578(0x114)]('/dev/stdin', 'utf8'));