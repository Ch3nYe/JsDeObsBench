'use strict';
const a0_0x4a5b6a = a0_0x147c;
(function (stringArrayFunction, comparisonValue) {
    const _0x3fed8f = a0_0x147c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3fed8f(0x18f)) / 0x1 + -parseInt(_0x3fed8f(0x191)) / 0x2 * (-parseInt(_0x3fed8f(0x196)) / 0x3) + -parseInt(_0x3fed8f(0x197)) / 0x4 * (-parseInt(_0x3fed8f(0x192)) / 0x5) + -parseInt(_0x3fed8f(0x198)) / 0x6 + parseInt(_0x3fed8f(0x199)) / 0x7 + -parseInt(_0x3fed8f(0x195)) / 0x8 + -parseInt(_0x3fed8f(0x19b)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1797, 0x6de4e));
function a0_0x147c(YkRQWx, key) {
    const stringArray = a0_0x1797();
    a0_0x147c = function (index, key) {
        index = index - 0x18e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x147c(YkRQWx, key);
}
function Main(input) {
    const _0x3ea8c1 = a0_0x147c;
    const tape = input['split']('\x0a')[0x0][_0x3ea8c1(0x18e)]('');
    const result = [];
    for (const v of tape) {
        if (v === 'B') {
            result[_0x3ea8c1(0x193)]();
        } else {
            result[_0x3ea8c1(0x19c)](v);
        }
    }
    console[_0x3ea8c1(0x19a)](result['join'](''));
}
Main(require('fs')[a0_0x4a5b6a(0x190)]('/dev/stdin', a0_0x4a5b6a(0x194)));
function a0_0x1797() {
    const _0x1befca = [
        '4dRWGJa',
        '5CwWVAh',
        'pop',
        'utf8',
        '4833768fRCGib',
        '834744mGmhZL',
        '3098968GsZskh',
        '2978412WAZKoN',
        '4085739dpFaZW',
        'log',
        '8886447LlyDSx',
        'push',
        'split',
        '623217iYIrrP',
        'readFileSync'
    ];
    a0_0x1797 = function () {
        return _0x1befca;
    };
    return a0_0x1797();
}