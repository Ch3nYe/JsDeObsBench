'use strict';
const a0_0x6d76d = a0_0xf806;
function a0_0x4f1d() {
    const _0x59943c = [
        '100vZatGX',
        '41739ATcbQC',
        '1602570KURKjc',
        '68488HKSSKs',
        '88195UvFcrE',
        'length',
        '6111917hZsFgF',
        'utf8',
        'floor',
        'log',
        '8dbcxia',
        'split',
        '10735389VYaGmy',
        'trim',
        '35qKHBBD',
        '9883140JKJlQo'
    ];
    a0_0x4f1d = function () {
        return _0x59943c;
    };
    return a0_0x4f1d();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2097e1 = a0_0xf806;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2097e1(0x11b)) / 0x1 * (-parseInt(_0x2097e1(0x120)) / 0x2) + parseInt(_0x2097e1(0x11e)) / 0x3 + parseInt(_0x2097e1(0x11d)) / 0x4 * (parseInt(_0x2097e1(0x121)) / 0x5) + parseInt(_0x2097e1(0x11f)) / 0x6 + parseInt(_0x2097e1(0x123)) / 0x7 + parseInt(_0x2097e1(0x127)) / 0x8 * (parseInt(_0x2097e1(0x129)) / 0x9) + -parseInt(_0x2097e1(0x11c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f1d, 0x92bf9));
function a0_0xf806(yBfOim, key) {
    const stringArray = a0_0x4f1d();
    a0_0xf806 = function (index, key) {
        index = index - 0x11b;
        let value = stringArray[index];
        return value;
    };
    return a0_0xf806(yBfOim, key);
}
const main = arg => {
    const _0x890067 = a0_0xf806;
    arg = arg[_0x890067(0x12a)]()[_0x890067(0x128)]('\x0a');
    const S = arg[0x0][_0x890067(0x128)]('');
    const K = parseInt(arg[0x1]);
    let streakS = 0x0;
    for (let i = 0x1; i < S[_0x890067(0x122)]; i++) {
        if (S[i] === S[i - 0x1]) {
            streakS++;
            S[i] = '@';
        }
    }
    console[_0x890067(0x126)](S[_0x890067(0x122)] === 0x1 ? Math[_0x890067(0x125)](K / 0x2) : streakS * K);
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x6d76d(0x124)));